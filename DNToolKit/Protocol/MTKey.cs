

// This class contains an implementation of miHoYo's awful XOR & mt64 based
// cryptography routines. Truly awful. I wonder if the developers suffered from terminal stupidity.
//- ysfreedom devs

namespace DNToolKit.Protocol
{
    //thank you so much ysfreedom i am in NOWAY rewriting this bullshit
    //also thanks to whoever wrote consoleapp2.exe

    public class MtKey
    {
        public static readonly MtKey NoOp = new MtKey(new byte[4096]);
        public const int Len = 4096;
        public byte[] Bytes;

        public MtKey()
        {
            Bytes = new byte[Len];
        }

        public MtKey(byte[] buffer)
        {
            if (buffer.Length != Len)
                throw new ArgumentException("Key must be 4096 bytes", nameof(buffer));
            Bytes = buffer.ToArray();
        }

        public MtKey(ulong seed)
        {
            //taken from consoleapp2.exe
            Bytes = MiHoYoKeyGenerator.GenerateKey(seed);
        }

        public static byte[] PartialKey(ulong seed, int length)
        {
            return MiHoYoKeyGenerator.PartialKey(seed, length);
        }

        public void Crypt(byte[] buffer)
        {
            for (int i = 0; i < buffer.Length; i++)
                buffer[i] ^= Bytes[i % Len];
        }

        public static MtKey FromBase64(string text)
        {
            return new MtKey(Convert.FromBase64String(text));
        }
    }
    public class MiHoYoKeyGenerator
    {
        private static readonly Mt1993764 Mt = new Mt1993764();
        public static byte[] GenerateKey(ulong source)
        {
            Mt.Initialize(source);
            var a = Mt.GenerateULong();
            Mt.Initialize(a);
            _ = (long)Mt.GenerateULong();
            byte[] key = new byte[4096];
            for (int index1 = 0; index1 < key.Length; index1 += 8)
            {
                byte[] bytes = BitConverter.GetBytes(SwapBytes(Mt.GenerateULong()));
                for (int index2 = index1; index2 < index1 + 8; ++index2)
                    key[index2] = bytes[index2 % 8];
            }
            return key;
        }

        public static byte[] PartialKey(ulong seed, int length)
        {
            Mt.Initialize(seed);
            var a = Mt.GenerateULong();
            Mt.Initialize(a);
            _ = (long)Mt.GenerateULong();
            byte[] newkey = new byte[length];
            for (int index1 = 0; index1 < length; index1 += 8)
            {
                byte[] bytes = BitConverter.GetBytes(SwapBytes(Mt.GenerateULong()));
                for (int index2 = index1; index2 < index1 + 8; ++index2)
                    newkey[index2] = bytes[index2 % 8];
            }
            return newkey;
        }
        //literally just does the same thing as System.Net.IPAddress.NetworkToHostOrder()
        public static ulong SwapBytes(ulong x)
        {
            x = x >> 32 | x << 32;
            x = (x & 0xFFFF0000FFFF0000UL) >> 16 | (ulong)(((long)x & 0xFFFF0000FFFFL) << 16);
            return (x & 0xFF00FF00FF00FF00UL) >> 8 | (ulong)(((long)x & 0xFF00FF00FF00FFL) << 8);
        }

        private class Mt1993764
        {
            public const int N = 312;
            private const int M = 156;
            private const ulong MatrixA = 13043109905998158313;
            private readonly ulong[] _mt = new ulong[624];
            private uint _mti = 312;

            public void Initialize(ulong[] src, uint mtiSrc = 0)
            {
                if (src.Length != _mt.Length)
                    throw new ArgumentException("NN", nameof(src));
                Array.Copy(src, 0, _mt, 0, src.Length);
                _mti = mtiSrc;
            }

            public void Initialize(ulong seed)
            {
                ulong[] mt = this._mt;
                mt[0] = seed;
                for (_mti = 1U; _mti < 312U; ++_mti)
                    mt[(int)_mti] = (ulong)(6364136223846793005L * ((long)mt[(int)_mti - 1] ^ (long)(mt[(int)_mti - 1] >> 62))) + _mti;
            }

            public ulong GetMag01(ulong val) => ((long)val & 1L) == 0L ? 0UL : 13043109905998158313UL;

            public void Regenerate1()
            {
                for (int index1 = 312; index1 < 624; ++index1)
                {
                    int index2 = index1 - 312;
                    ulong val = _mt[index2] ^ (ulong)(((long)_mt[index2 + 1] ^ (long)_mt[index2]) & int.MaxValue);
                    _mt[index1] = GetMag01(val) ^ val >> 1 ^ _mt[index1 - 156];
                }
            }

            public void Regenerate2()
            {
                int index1;
                for (index1 = 0; index1 < 156; ++index1)
                {
                    int index2 = index1 + 312;
                    ulong val = _mt[index2] ^ (ulong)(((long)_mt[index2 + 1] ^ (long)_mt[index2]) & int.MaxValue);
                    _mt[index1] = GetMag01(val) ^ val >> 1 ^ _mt[index1 + 312 + 156];
                }
                for (; index1 < 311; ++index1)
                {
                    int index3 = index1 + 312;
                    ulong val = _mt[index3] ^ (ulong)(((long)_mt[index3 + 1] ^ (long)_mt[index3]) & int.MaxValue);
                    _mt[index1] = GetMag01(val) ^ val >> 1 ^ _mt[index1 - 156];
                }
                ulong val1 = _mt[index1 + 312] ^ (ulong)(((long)_mt[0] ^ (long)_mt[index1 + 312]) & int.MaxValue);
                _mt[index1] = GetMag01(val1) ^ val1 >> 1 ^ _mt[155];
                _mti = 0U;
            }

            public ulong GenerateULong()
            {
                if (_mti == 312U)
                    Regenerate1();
                else if (624U <= _mti)
                    Regenerate2();
                ulong num1 = _mt[(int)_mti++];
                ulong num2 = (ulong)((((long)(num1 >> 29) & 22906492245L ^ (long)num1) & 62583042209491L) << 17 ^ (long)(num1 >> 29) & 22906492245L) ^ num1;
                return (ulong)(((long)num2 & -16521L) << 37) ^ num2 ^ ((ulong)(((long)num2 & -16521L) << 37) ^ num2) >> 43;
            }
        }
    }
}