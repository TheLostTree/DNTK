using DNToolKit.AnimeGame.Models;

namespace DNToolKit.Protocol.Events
{
    /// <summary>
    /// The <see cref="EventArgs"/> used for <see cref="KCP.MessageReceived"/>.
    /// </summary>
    class MessageReceivedEventArgs : EventArgs
    {
        /// <summary>
        /// The raw message received from <see cref="KCP"/>.
        /// </summary>
        public byte[] Message { get; }

        /// <summary>
        /// The sender of the raw message.
        /// </summary>
        public Sender Sender { get; }

        /// <summary>
        /// Creates a new instance of <see cref="MessageReceivedEventArgs"/>.
        /// </summary>
        /// <param name="message">The raw message received.</param>
        /// <param name="sender">The sender from which the raw message was received.</param>
        public MessageReceivedEventArgs(byte[] message, Sender sender)
        {
            Message = message;
            Sender = sender;
        }
    }
}
