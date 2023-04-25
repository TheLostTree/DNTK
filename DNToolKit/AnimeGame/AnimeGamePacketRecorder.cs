using System.Buffers.Binary;
using DNToolKit.AnimeGame.Models;

namespace DNToolKit.AnimeGame
{
    /// <summary>
    /// A class to load and persist <see cref="AnimeGamePacket"/>s.
    /// </summary>
    class AnimeGamePacketRecorder
    {
        private readonly Stream? _persistStream;

        /// <summary>
        /// Creates a new instance of <see cref="AnimeGamePacketRecorder"/>.
        /// </summary>
        /// <param name="persistPath">The file path to persist <see cref="AnimeGamePacket"/>s to.</param>
        public AnimeGamePacketRecorder(string persistPath)
        {
            var persistDir = Path.GetDirectoryName(persistPath);
            if (!Directory.Exists(persistDir))
                Directory.CreateDirectory(persistDir);

            _persistStream = !File.Exists(persistPath) ? File.Create(persistPath) : File.Open(persistPath, FileMode.Open);
        }

        ~AnimeGamePacketRecorder()
        {
            _persistStream?.Flush();
            _persistStream?.Close();
        }

        /// <summary>
        /// Persists an <see cref="AnimeGamePacket"/> to the end of the recording file.
        /// </summary>
        /// <param name="packet">The <see cref="AnimeGamePacket"/> to persist.</param>
        public void PersistMessage(AnimeGamePacket packet)
        {
            if (_persistStream == null)
                return;

            _persistStream.Position = _persistStream.Length;

            // Write sender
            _persistStream.WriteByte((byte)packet.Sender);

            // Write op code
            var buffer = new byte[4];
            BinaryPrimitives.WriteUInt32LittleEndian(buffer, (uint)packet.PacketType);
            _persistStream.Write(buffer);

            // Write meta size
            BinaryPrimitives.WriteUInt32LittleEndian(buffer, (uint)(packet.MetadataBytes?.Length ?? 0));
            _persistStream.Write(buffer);

            // Write message size
            BinaryPrimitives.WriteUInt32LittleEndian(buffer, (uint)packet.ProtoBufBytes.Length);
            _persistStream.Write(buffer);

            // Write meta data
            if (packet.MetadataBytes != null)
                _persistStream.Write(packet.MetadataBytes);

            // Write proto data
            _persistStream.Write(packet.ProtoBufBytes);

            // Flush stream to disc
            _persistStream.Flush();
        }

        /// <summary>
        /// Reads all messages from the beginning of the recording file.
        /// </summary>
        /// <returns>An enumeration of all recorded messages.</returns>
        public IEnumerable<AnimeGamePacket> ReadMessages()
        {
            if (_persistStream == null)
                yield break;

            _persistStream.Position = 0;

            var buffer = new byte[4];
            while (_persistStream.Position < _persistStream.Length)
            {
                // Read sender
                var sender = (Sender)_persistStream.ReadByte();

                // Read op code
                _persistStream.Read(buffer);
                var opCode = BinaryPrimitives.ReadUInt32LittleEndian(buffer);

                // Read meta size
                _persistStream.Read(buffer);
                var metaSize = BinaryPrimitives.ReadUInt32LittleEndian(buffer);

                // Read message size
                _persistStream.Read(buffer);
                var size = BinaryPrimitives.ReadUInt32LittleEndian(buffer);

                // Read proto data
                var metaData = new byte[metaSize];
                _persistStream.Read(metaData);

                // Read proto data
                var protoData = new byte[size];
                _persistStream.Read(protoData);

                yield return AnimeGamePacket.ParseRaw(protoData, metaData, opCode, sender);
            }
        }
    }
}
