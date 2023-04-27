using System.Security.Cryptography;
using Common;
using Common.Protobuf;
using DNToolKit.AnimeGame.Crypto;
using DNToolKit.AnimeGame.Models;
using DNToolKit.Configuration.Models;
using DNToolKit.Extensions;
using Serilog;

namespace DNToolKit.AnimeGame
{
    /// <summary>
    /// Handles the flow and cryptography of <see cref="AnimeGamePacket"/>s for raw messages.
    /// </summary>
    class AnimeGamePacketProcessor : IDisposable

    {
        private static readonly RSA ClientPrivate = RSA.Create();

        private readonly SniffConfig _config;
        private AnimeGamePacketRecorder _packetRecorder;

        private MtKey? _key;
        private MtKey? _sessionKey;
        private bool _useSessionKey;

        private ulong? _tokenReqSendTime;
        private ulong? _tokenRspServerKey;

        private byte _countBruteForce;
        private long _count;

        /// <summary>
        /// The event to pass on anime game packets.
        /// </summary>
        public event EventHandler<AnimeGamePacket>? PacketProcessed;

        /// <summary>
        /// Create a new instance of <see cref="AnimeGamePacketProcessor"/>.
        /// </summary>
        /// <param name="config">The config to setup communication.</param>
        public AnimeGamePacketProcessor(SniffConfig config)
        {
            _config = config;
            _packetRecorder = new AnimeGamePacketRecorder(config.PacketRecordPath);

            ClientPrivate.FromXmlString(config.ClientPrivateRsa);

            Reset();
        }

        /// <summary>
        /// Resets the state of the processor.
        /// </summary>
        public void Reset()
        {
            _tokenRspServerKey = null;
            _tokenReqSendTime = null;

            _key = null;
            _sessionKey = null;
            _useSessionKey = false;

            _countBruteForce = 0;
            _count = 0;
        }

        /// <summary>
        /// Initializes the processor and reads already recorded messages, if the config toggled it.
        /// </summary>
        public void Initialize()
        {
            if (!_config.LoadPackets)
                return;

            foreach (var packet in _packetRecorder.ReadMessages())
                OnPacketReceived(packet);
        }

        /// <summary>
        /// Process a raw message and send out the parsed <see cref="AnimeGamePacket"/>.
        /// </summary>
        /// <param name="data">The raw message to process.</param>
        /// <param name="sender">The sender of the raw message.</param>
        /// <param name="keyReceived">If the key for decryption could be received or recovered. Is only <see langword="false"/>, if the <see cref="GetPlayerTokenRsp"/> was not sufficient to recover a key.</param>
        /// <remarks>This method starts the event invocation chain that exposes <see cref="AnimeGamePacket"/>s publicly.</remarks>
        public void Process(byte[] data,
            Sender sender,
            out bool keyReceived)
        {
            keyReceived = true;

            if (!_useSessionKey)
            {
                _key ??= DispatchKeyLookup.Find(data);
                _key?.ApplyTo(data);
            }
            else
            {
                if (_sessionKey is null)
                {
                    Log.Debug("Brute forcing Key...");

                    _countBruteForce++;

                    if (!_tokenReqSendTime.HasValue)
                        Log.Warning("Did not receive player token send time yet");
                    else if (!_tokenRspServerKey.HasValue)
                        Log.Warning("Did not receive server key yet");
                    else
                    {
                        _sessionKey =
                            KeyBruteForcer.BruteForce(data,
                                (long)_tokenReqSendTime.Value,
                                _tokenRspServerKey.Value);
                        if (_sessionKey == null)
                            Log.Error(
                                $"Cannot find seed. (@{data} : {_tokenReqSendTime.Value} : {_tokenRspServerKey.Value}");
                    }
                }

                _sessionKey?.ApplyTo(data);

                if (_countBruteForce > 10)
                {
                    Log.Error(
                        "Brute forcing has failed {Count} times, so make sure you login on a freshly launched client",
                        _countBruteForce);
                    keyReceived = false;

                    return;
                }
            }

            if (data.GetUInt16(0) == 0x4567)
            {
                var packet = ParsePacket(data,
                    sender);
                if (packet != null)
                {
                    if (_config.PersistPackets)
                        _packetRecorder.PersistMessage(packet);

                    OnPacketReceived(packet);
                }
            }
            else if (_sessionKey is null)
            {
                Log.Warning("Encrypted Packet detected");
            }
            else
            {
                Log.Warning("Old key is now invalid. You may need to restart the game client and app");
                _sessionKey = null;
            }
        }

        /// <summary>
        /// Parses a raw message to an <see cref="AnimeGamePacket"/>.
        /// </summary>
        /// <param name="data">The raw message to parse.</param>
        /// <param name="sender">The sender of the raw message.</param>
        /// <returns>The parsed <see cref="AnimeGamePacket"/>. Otherwise <see langword="null"/>.</returns>
        private AnimeGamePacket? ParsePacket(byte[] data,
            Sender sender)
        {
            // Parse the packet
            AnimeGamePacket packet;
            try
            {
                packet = AnimeGamePacket.Parse(data,
                    sender);
            }
            catch (Exception e)
            {
                Log.Fatal(e,
                    "Could not parse anime game packet");
                return null;
            }

            Log.Debug($"{_count++} {packet.PacketType}");

            // Just return the packet, if it's not the player token response
            if (packet.PacketType != Opcode.GetPlayerTokenRsp)
                return packet;

            // Extract session key
            _tokenReqSendTime = packet.Metadata?.SentMs;

            var tokenRsp = packet.ProtoBuf as GetPlayerTokenRsp;
            Log.Information("{TokenRsp}",
                tokenRsp);

            if (tokenRsp?.ServerRandKey is null)
                Log.Warning("Failed to receive random server key");
            else
            {
                var key = ClientPrivate.Decrypt(Convert.FromBase64String(tokenRsp.ServerRandKey),
                    RSAEncryptionPadding.Pkcs1);

                _tokenRspServerKey = key.GetUInt64(0);
                _useSessionKey = true;
            }

            return packet;
        }

        /// <summary>
        /// Passes on the <see cref="AnimeGamePacket"/> to <see cref="PacketProcessed"/>.
        /// </summary>
        /// <param name="packet">The <see cref="AnimeGamePacket"/> to üass on.</param>
        private void OnPacketReceived(AnimeGamePacket packet)
        {
            PacketProcessed?.Invoke(this,
                packet);
        }

        public void Dispose()
        {
            _packetRecorder = null!;
            //not ideal lol
            GC.Collect();
        }
    }
}