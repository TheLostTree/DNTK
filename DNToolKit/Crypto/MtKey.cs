using System.Buffers.Binary;
using System.Runtime.InteropServices;

namespace DNToolKit.Crypto
{
    /// <summary>
    /// Represents a key created with <see cref="Mt1993764"/>.
    /// </summary>
    class MtKey
    {
        /// <summary>
        /// The default buffer size of a <see cref="MtKey"/>.
        /// </summary>
        public const int BufferLength = 4096;

        private static readonly Mt1993764 Mt = new();
        public static readonly MtKey Null = new();

        public readonly byte[] _buffer;

        private MtKey() : this(new byte[BufferLength])
        { }

        private MtKey(ulong seed) : this(Generate(seed))
        { }

        private MtKey(byte[] buffer)
        {
            _buffer = buffer;
        }

        /// <summary>
        /// Applies the key to the given data.
        /// </summary>
        /// <param name="buffer">The data to apply the key to.</param>
        public void ApplyTo(byte[] buffer)
        {
            for (var i = 0; i < buffer.Length; i++)
                buffer[i] ^= _buffer[i % BufferLength];
        }

        /// <summary>
        /// Creates a new instance of <see cref="MtKey"/> with <param name="key"/>.
        /// </summary>
        /// <param name="key">The key to set in the instance.</param>
        /// <returns>Created instance of <see cref="MtKey"/>.</returns>
        public static MtKey FromBuffer(byte[] key)
        {
            if (key.Length != BufferLength)
                throw new ArgumentException($"Key must be {BufferLength} bytes.", nameof(key));

            return new MtKey(key);
        }

        /// <summary>
        /// Creates a new instance of <see cref="MtKey"/> based on <param name="seed"/>.
        /// </summary>
        /// <param name="seed">The seed to initialize the key with.</param>
        /// <returns>Created instance of <see cref="MtKey"/>.</returns>
        public static MtKey FromSeed(ulong seed)
        {
            return new MtKey(seed);
        }

        /// <summary>
        /// Creates a new instance of <see cref="MtKey"/> based on <param name="text"/>.
        /// </summary>
        /// <param name="text">The Base64-Text to initialize the key with.</param>
        /// <returns>Created instance of <see cref="MtKey"/>.</returns>
        public static MtKey FromBase64(string text)
        {
            return FromBuffer(Convert.FromBase64String(text));
        }

        /// <summary>
        /// Generate a key from <see cref="Mt1993764"/> generated random values.
        /// </summary>
        /// <param name="seed">The <see cref="Mt1993764"/> seed to start generating from.</param>
        /// <param name="length">The length of the key to generate.</param>
        /// <returns>The generated key.</returns>
        public static byte[] Generate(ulong seed, int length = BufferLength)
        {
            Mt.Initialize(seed);
            var a = Mt.GenerateUInt64();

            Mt.Initialize(a);
            Mt.GenerateUInt64();

            var newKey = new byte[length];
            for (var i = 0; i < length; i += sizeof(ulong))
            {
                var bytes = newKey.AsSpan(i, sizeof(ulong));
                WriteUInt64(Mt.GenerateUInt64(), bytes);
            }

            return newKey;
        }

        /// <summary>
        /// Writes a <see cref="ulong"/> into a buffer with reversed byte order.
        /// </summary>
        /// <param name="value">The value to write.</param>
        /// <param name="buffer">The buffer to write the value in.</param>
        private static void WriteUInt64(ulong value, Span<byte> buffer)
        {
            // After benchmarking, this setup came out as best performing in the mean.
            value = BinaryPrimitives.ReverseEndianness(value);

            MemoryMarshal.Write(buffer, ref value);
        }
    }
}