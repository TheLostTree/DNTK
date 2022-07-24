using System.Net;

namespace DNToolKit;

public static class ByteArray
{
    public static void SetUInt16(this byte[] arr, int offset, ushort value, bool bigEndian = false)
    {
        if (bigEndian) value = (ushort)IPAddress.HostToNetworkOrder((short)value);
        arr[offset + 0] = (byte)(value & 0xFF);
        arr[offset + 1] = (byte)((value & 0xFF00) >> 8);
    }

    public static void SetUInt32(this byte[] arr, int offset, uint value, bool bigEndian = false)
    {
        if (bigEndian) value = (uint)IPAddress.HostToNetworkOrder((int)value);
        arr[offset + 0] = (byte)(value & 0xFF);
        arr[offset + 1] = (byte)((value & 0xFF00) >> 8);
        arr[offset + 2] = (byte)((value & 0xFF0000) >> 16);
        arr[offset + 3] = (byte)((value & 0xFF000000) >> 24);
    }

    public static void SetUInt64(this byte[] arr, int offset, UInt64 value, bool bigEndian = false)
    {
        if (bigEndian) value = (UInt64)IPAddress.HostToNetworkOrder((Int64)value);
        arr[offset + 0] = (byte)(value & 0xFF);
        arr[offset + 1] = (byte)((value & 0xFF00) >> 8);
        arr[offset + 2] = (byte)((value & 0xFF0000) >> 16);
        arr[offset + 3] = (byte)((value & 0xFF000000) >> 24);
        arr[offset + 4] = (byte)((value & 0xFF00000000) >> 32);
        arr[offset + 5] = (byte)((value & 0xFF0000000000) >> 40);
        arr[offset + 6] = (byte)((value & 0xFF000000000000) >> 48);
        arr[offset + 7] = (byte)((value & 0xFF00000000000000) >> 54);

    }

    public static ushort GetUInt16(this byte[] arr, int offset, bool bigEndian = false)
    {
        ushort ret = (ushort)(arr[offset + 0] | arr[offset + 1] << 8);
        if (bigEndian) ret = (ushort)IPAddress.NetworkToHostOrder((short)ret);
        return ret;
    }

    public static uint GetUInt32(this byte[] arr, int offset, bool bigEndian = false)
    {
        uint ret = arr[offset + 0] | (uint)arr[offset + 1] << 8 |
                     (uint)arr[offset + 2] << 16 | (uint)arr[offset + 3] << 24;
        if (bigEndian) ret = (uint)IPAddress.NetworkToHostOrder((int)ret);
        return ret;
    }

    public static UInt64 GetUInt64(this byte[] arr, int offset, bool bigEndian = false)
    {
        int pos = offset;


        UInt64 ret = ((UInt64)arr[pos + 0] << 00) | ((UInt64)arr[pos + 1] << 08)
                                                  | ((UInt64)arr[pos + 2] << 16) | ((UInt64)arr[pos + 3] << 24)
                                                  | ((UInt64)arr[pos + 4] << 32) | ((UInt64)arr[pos + 5] << 40)
                                                  | ((UInt64)arr[pos + 6] << 48) | ((UInt64)arr[pos + 7] << 56);

        if (bigEndian) ret = (UInt64)IPAddress.NetworkToHostOrder((long)ret);

        return ret;


    }
}