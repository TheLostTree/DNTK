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


        public KCP(uint conv, uint token)
        {

            _nativeKcp = new IKCP(conv, token, new object());
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

            // ReceiveAll();

            return retVal;
        }

        /// <summary>
        /// Receives all messages input by <see cref="Input"/>.
        /// </summary>
        private void ReceiveAll(Action<byte[]> callback)
        {
            byte[]? recv;
            do
            {
                recv = Receive();
                if (recv == null)
                {
                    break;
                }
                callback(recv);
            } while (true);
            // Receive and process message, until message is null
            // while (Receive() is { } receivedMessage)
            //     OnMessageReceived(receivedMessage);
        }

        /// <summary>
        /// Received a single message input by <see cref="Input"/>.
        /// </summary>
        /// <returns></returns>
        private byte[]? Receive()
        {
            int size;
            lock (_lockObj)
            {
                size = _nativeKcp.PeekSize();
            }
            if (size < 0)
                return null;
            var buffer = new byte[size];

            var ret = 0;
            lock (_lockObj)
            {
                ret = _nativeKcp.Recv(buffer, 0, buffer.Length);
            }
            // Console.WriteLine("Recv");
            if (ret < 0)
            {
                Console.WriteLine($"ret: {ret}");
            }
            return buffer.ToArray();
        }
    }

}