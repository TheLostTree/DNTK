using DNToolKit.AnimeGame.Models;
using DNToolKit.Protocol.Events;

namespace DNToolKit.Protocol
{
    /// <summary>
    /// The protocol used in the anime game to exchange data between the client and server.
    /// For more information on the protocol, see: https://github.com/skywind3000/kcp
    /// </summary>
    class KCP
    {
        private readonly IKCP _nativeKcp;
        private readonly object _lockObj = new();

        private readonly Sender _user;

        /// <summary>
        /// The event to pass on every raw message received by <see cref="Input"/>.
        /// </summary>
        public event EventHandler<MessageReceivedEventArgs>? MessageReceived;

        /// <summary>
        /// Create a new instance of <see cref="KCP"/>.
        /// </summary>
        /// <param name="conv">The session number for this connection.</param>
        /// <param name="token">The token for this connection.</param>
        /// <param name="user">The sender for this connection.</param>
        public KCP(uint conv, uint token, Sender user)
        {
            _user = user;

            _nativeKcp = new IKCP(conv, token, user);
            _nativeKcp.NoDelay(1, 10, 2, 0);
            _nativeKcp.WndSize(256, 256);
            _nativeKcp.SetOutput((_, _, _) => { });
        }

        /// <summary>
        /// Input raw data and split them into their raw message blobs.
        /// </summary>
        /// <param name="buff">The buffer holding one or more messages.</param>
        /// <returns>An error code for what went wrong in splitting the raw data.</returns>
        public int Input(byte[] buff)
        {
            int retVal;
            lock (_lockObj)
                retVal = _nativeKcp.Input(buff, 0, buff.Length);

            ReceiveAll();

            return retVal;
        }

        /// <summary>
        /// Receives all messages input by <see cref="Input"/>.
        /// </summary>
        private void ReceiveAll()
        {
            // Receive and process message, until message is null
            while (Receive() is { } receivedMessage)
                OnMessageReceived(receivedMessage);
        }

        /// <summary>
        /// Received a single message input by <see cref="Input"/>.
        /// </summary>
        /// <returns></returns>
        private byte[]? Receive()
        {
            lock (_lockObj)
            {
                var size = _nativeKcp.PeekSize();
                if (size < 0)
                    return null;

                var buffer = new byte[size];
                _nativeKcp.Recv(buffer, 0, buffer.Length);

                return buffer.ToArray();
            }
        }

        /// <summary>
        /// Passes on the raw message to <see cref="MessageReceived"/>.
        /// </summary>
        /// <param name="message">The raw message to pass on.</param>
        private void OnMessageReceived(byte[] message)
        {
            MessageReceived?.Invoke(this, new MessageReceivedEventArgs(message, _user));
        }
    }

}