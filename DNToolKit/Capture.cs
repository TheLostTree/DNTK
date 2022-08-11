using Serilog;

namespace DNToolKit;

public class Capture
{
    public Capture()
    {
        
    }

    public struct DNTKapPkt
    {
        public uint length;
        public byte[] data;
    }

    public static void ParseFromBytes(byte[] data)
    {
        var majorVers = data.GetUInt16(0,true);
        var minorVers = data.GetUInt16(2,true);
        Log.Information($"Detected verision {majorVers}.{minorVers} from header...");
        if ((majorVers != Program.GameMajorVersion) || (minorVers != Program.GameMinorVersion))
        {
            Log.Warning($"Version discrepancy found! {majorVers}.{minorVers} may not be compatible with this version of DNTK!");
        }

        var startOffset = 4;
        while (true)
        {
            var bts = GetNextPacketBytes(data, ref startOffset);

            //sanity check
            if(bts.GetUInt32(0, true) == 0x4567 && bts.GetUInt32(bts.Length-4, true) == 0x89ab)
            {
                //slay its a valid packet
                Console.WriteLine(startOffset);
            }
            if((data.Length - startOffset) < 10)
            {
                //sus
                break;
            }
        }

    }

    public static byte[] GetNextPacketBytes(byte[] data, ref int startOffset)
    {
        var offset = startOffset;
        var len = data.GetUInt32(offset, true);
        var sender = data.GetUInt32(offset + 4, true);

        var packetBytes = new byte[len];
        data.CopyTo(packetBytes, offset + 8);

        startOffset += ((int)len + 8);

        return data;
    }
    
    
    
    
}