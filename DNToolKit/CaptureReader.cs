using DNToolKit.Sniffer;
using Serilog;

namespace DNToolKit;

public class CaptureReader
{

    private FileStream _data;
    public CaptureReader(FileStream datastream)
    {
        _data = datastream;
    }

    public struct CaptureChunk
    {
        public uint Length;
        public UdpHandler.Sender Sender;
        public byte[] Data;
    }

    public void Start()
    {
        var headerInfo = ReadNextBytes(4);
        if(headerInfo.GetUInt16(0,true) != Program.GameMajorVersion) Log.Warning("CaptureFile may be from the wrong game version");
        if(headerInfo.GetUInt16(2,true) != Program.GameMinorVersion) Log.Warning("CaptureFile may be from the wrong game version");

        CaptureChunk? captureChunk = null;
        do
        {
            captureChunk = readNextCaptureChunk();
            Log.Information("Capture with len {len} read", captureChunk.Value.Length);
            //process captureChunk
            
        } while (captureChunk.HasValue);
    }

    private byte[]? ReadNextBytes(uint length)
    {
        //bytes left in stream

        var remaining = _data.Length - _data.Position;

        if (remaining < length) return null;
        var bytes = new byte[length];

        var read = _data.Read(bytes);
        if (read == length)
        {
            return bytes;
        }
        Log.Warning("Inconsistent read vs length");
        return null;
    }

    private CaptureChunk? readNextCaptureChunk()
    {
        
        var len = ReadNextBytes(4)?.GetUInt32(0, true);
        var sender = ReadNextBytes(4)?.GetUInt32(0, true);
        if(!len.HasValue) return null;
        if(!sender.HasValue) return null;
        var data = ReadNextBytes(len.Value);
        if (data is not null)
        {
            return new CaptureChunk
            {
                Data = data,
                Sender = (UdpHandler.Sender)sender.Value,
                Length = len.Value
            };
        }

        return null;

    }
}