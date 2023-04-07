namespace DNToolKit.Extensions
{
    /// <summary>
    /// Extensions for <see cref="Array.byte"/>.
    /// </summary>
    static class ByteArrayExtensions
    {
        /// <summary>
        /// Convert <see cref="Array.byte"/> to <see cref="ushort"/>.
        /// </summary>
        /// <param name="buffer">The buffer to convert.</param>
        /// <param name="offset">The offset from which to start converting.</param>
        /// <returns>The converted <see cref="ushort"/>.</returns>
        public static ushort GetUInt16(this byte[] buffer, int offset)
        {
            return (ushort)((buffer[offset] << 8) | buffer[offset + 1]);
        }

        /// <summary>
        /// Convert <see cref="Array.byte"/> to <see cref="uint"/>.
        /// </summary>
        /// <param name="buffer">The buffer to convert.</param>
        /// <param name="offset">The offset from which to start converting.</param>
        /// <returns>The converted <see cref="uint"/>.</returns>
        public static uint GetUInt32(this byte[] buffer, int offset)
        {
            return (uint)((buffer[offset] << 24) | (buffer[offset + 1] << 16) | (buffer[offset + 2] << 8) | buffer[offset + 3]);
        }

        /// <summary>
        /// Convert <see cref="Array.byte"/> to <see cref="ulong"/>.
        /// </summary>
        /// <param name="buffer">The buffer to convert.</param>
        /// <param name="offset">The offset from which to start converting.</param>
        /// <returns>The converted <see cref="ulong"/>.</returns>
        public static ulong GetUInt64(this byte[] buffer, int offset)
        {
            return ((ulong)buffer[offset] << 56) | ((ulong)buffer[offset + 1] << 48) | ((ulong)buffer[offset + 2] << 40) | ((ulong)buffer[offset + 3] << 32) |
                   ((ulong)buffer[offset + 4] << 24) | ((ulong)buffer[offset + 5] << 16) | ((ulong)buffer[offset + 6] << 8) | buffer[offset + 7];
        }
    }
}
