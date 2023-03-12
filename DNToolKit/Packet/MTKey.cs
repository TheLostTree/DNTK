

// This class contains an implementation of miHoYo's awful XOR & mt64 based
// cryptography routines. Truly awful. I wonder if the developers suffered from terminal stupidity.
//- ysfreedom devs

using System.Runtime.InteropServices;

namespace DNToolKit.Packet
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
                throw new ArgumentException("Key must be 4096 bytes", "buffer");
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

        public static void MersenneKeyGen(byte[] buf, ulong seed)
        {

            //this doesnt feel right lol
            ulong[] state = new ulong[624];
            ulong v7 = 1, v9 = 0x137, v3;
            state[0] = seed;

            ulong[] pv1 = state;
            int pv1Idx = 0;
            do
            {
                pv1Idx++;
                seed = (seed ^ seed >> 0x3e) * 0x5851f42d4c957f2d + v7;
                v7++;
                pv1[pv1Idx] = seed;
                v9--;
            } while (v9 != 0);

            int v5 = 0;
            int pv6Idx = 2;
            do
            {
                int v8 = (v5 + 0x138) % 0x270;
                if (v8 == 0x138)
                {
                    v7 = 0x138;
                    pv1Idx = 0x9c;
                    do
                    {
                        v3 = ((uint)state[pv1Idx - 0x9b] ^ (uint)state[pv1Idx - 0x9c]) & 0x7fffffff ^ state[pv1Idx - 0x9c];
                        state[pv1Idx + 0x9c] = (ulong)(int)-((uint)v3 & 1) & 0xb5026f5aa96619e9 ^ v3 >> 1 ^ state[pv1Idx];
                        v7--;
                        pv1Idx++;
                    } while (v7 != 0);
                }
                else if (v8 == 0)
                {
                    v7 = 0x9c;
                    pv1Idx = 0x1d4;
                    do
                    {
                        v3 = ((uint)state[pv1Idx - 0x9b] ^ (uint)state[pv1Idx - 0x9c]) & 0x7fffffff ^ state[pv1Idx - 0x9c];
                        state[pv1Idx - 0x1d4] = (ulong)(int)-((uint)v3 & 1) & 0xb5026f5aa96619e9 ^ v3 >> 1 ^ state[pv1Idx];
                        v7--;
                        pv1Idx++;
                    } while (v7 != 0);

                    v7 = 0x9b;
                    pv1Idx = 0;
                    do
                    {
                        v3 = ((uint)state[pv1Idx + 0x1d5] ^ (uint)state[pv1Idx + 0x1d4]) & 0x7fffffff ^ state[pv1Idx + 0x1d4];
                        state[pv1Idx + 0x9c] = (ulong)(int)-((uint)v3 & 1) & 0xb5026f5aa96619e9 ^ v3 >> 1 ^ state[pv1Idx];
                        v7--;
                        pv1Idx++;
                    } while (v7 != 0);
                }

                v5++;
                v3 = state[v8] ^ state[v8] >> 0x1d & 0x555555555;
                v3 = v3 ^ (v3 & 0x38eb3ffff6d3) << 0x11;
                ulong v2 = v3 ^ (v3 & 0xffffffffffffbf77) << 0x25;
                ulong v4 = v2 >> 0x2b ^ v2;
                buf[pv6Idx + 5] = (byte)v4;
                buf[pv6Idx - 2] = (byte)(v2 >> 0x38);
                buf[pv6Idx - 1] = (byte)(v2 >> 0x30);
                buf[pv6Idx + 0] = (byte)(v2 >> 0x28);
                buf[pv6Idx + 1] = (byte)(v2 >> 0x20);
                buf[pv6Idx + 2] = (byte)(v3 >> 0x18);
                buf[pv6Idx + 3] = (byte)(v4 >> 0x10);
                buf[pv6Idx + 4] = (byte)(v4 >> 0x08);
                pv6Idx = pv6Idx + 8;
            } while (v5 < 0x200);

        }

    }
    public class MiHoYoKeyGenerator
    {
        private static readonly Mt1993764 _mt = new Mt1993764();
        public static byte[] GenerateKey(ulong source)
        {
            _mt.Initialize(source);
            var a = _mt.GenerateULong();
            _mt.Initialize(a);
            _ = (long)_mt.GenerateULong();
            byte[] key = new byte[4096];
            for (int index1 = 0; index1 < key.Length; index1 += 8)
            {
                byte[] bytes = BitConverter.GetBytes(SwapBytes(_mt.GenerateULong()));
                for (int index2 = index1; index2 < index1 + 8; ++index2)
                    key[index2] = bytes[index2 % 8];
            }
            return key;
        }

        public static byte[] PartialKey(ulong seed, int length)
        {
            //todo: look into if i really need to instantiate two of these...
            //i think i can get by with only one static one

            _mt.Initialize(seed);
            var a = _mt.GenerateULong();
            _mt.Initialize(a);
            _ = (long)_mt.GenerateULong();
            byte[] newkey = new byte[length];
            for (int index1 = 0; index1 < length; index1 += 8)
            {
                byte[] bytes = BitConverter.GetBytes(SwapBytes(_mt.GenerateULong()));
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