namespace DNToolKit.AnimeGame.Crypto
{
    /// <summary>
    /// The 64-bit version of the Mersenne Twister pseudorandom number generator.
    /// </summary>
    /// <remarks>Refer to <see href="http://www.math.sci.hiroshima-u.ac.jp/m-mat/MT/VERSIONS/C-LANG/mt19937-64.c"/> for the specification.</remarks>
    class Mt1993764
    {
        private const int Nn = 312;
        private const int Mm = 156;
        private const ulong MatrixA = 0xB5026F5AA96619E9UL;
        private const ulong UpperMask = 0xFFFFFFFF80000000UL; // Most significant 33 bits
        private const ulong LowerMask = 0X7FFFFFFFUL;         // Least significant 31 bits
        private const ulong DefaultSeed = 5489UL;

        private static readonly ulong[] Mag01 = { 0UL, MatrixA };

        private readonly ulong[] _mt = new ulong[Nn];
        private ulong _mti;

        /// <summary>
        /// Creates an instance of the 64-bit Mersenne Twister and initializes state with a seed
        /// </summary>
        public Mt1993764(ulong seed = DefaultSeed) => Initialize(seed);

        /// <summary>
        /// Initializes state with a seed
        /// </summary>
        public void Initialize(ulong seed)
        {
            _mt[0] = seed;

            for (_mti = 1; _mti < Nn; _mti++)
                _mt[_mti] = 6364136223846793005UL * (_mt[_mti - 1] ^ (_mt[_mti - 1] >> 62)) + _mti;
        }

        /// <summary>
        /// Generates a random number on a [0, 2^64-1] interval
        /// </summary>
        public ulong GenerateUInt64()
        {
            ulong x;

            if (_mti >= Nn)
            {
                int i;
                for (i = 0; i < Nn - Mm; i++)
                {
                    x = (_mt[i] & UpperMask) | (_mt[i + 1] & LowerMask);
                    _mt[i] = _mt[i + Mm] ^ (x >> 1) ^ Mag01[x & 1UL];
                }

                for (; i < Nn - 1; i++)
                {
                    x = (_mt[i] & UpperMask) | (_mt[i + 1] & LowerMask);
                    _mt[i] = _mt[i + (Mm - Nn)] ^ (x >> 1) ^ Mag01[x & 1UL];
                }

                x = (_mt[Nn - 1] & UpperMask) | (_mt[0] & LowerMask);
                _mt[Nn - 1] = _mt[Mm - 1] ^ (x >> 1) ^ Mag01[x & 1UL];

                _mti = 0;
            }

            x = _mt[_mti++];

            x ^= (x >> 29) & 0x5555555555555555UL;
            x ^= (x << 17) & 0x71D67FFFEDA60000UL;
            x ^= (x << 37) & 0xFFF7EEE000000000UL;
            x ^= x >> 43;

            return x;
        }
    }
}
