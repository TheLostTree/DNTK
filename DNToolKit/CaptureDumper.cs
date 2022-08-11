
using DNToolKit.Sniffer;
using Serilog;

namespace DNToolKit;

public class CaptureDumper
{
    public string curFile;

    public bool running = false;
    private FileStream stream;
    
    public CaptureDumper()
    {
        var dir = Directory.CreateDirectory(Program.Config.CaptureFolder);
        running = true;
        curFile = getFileName();
        Log.Information("Writing new Capture to File {filename}", curFile);
        stream = new FileStream(Path.Join(dir.FullName, curFile), FileMode.Append);
        stream.Write(GetHeader());
        stream.Flush();
    }

    public void AddPacketData(byte[] data, UdpHandler.Sender sender)
    {
        var f = new byte[8];
        f.SetUInt32(0, (uint)data.Length, true);
        f.SetUInt32(4, (uint)sender, true);
        stream.Write(f);
        stream.Write(data);
        stream.Flush();
        //footer maybe?
    }

    public void Close()
    {
        stream.Flush();
        Log.Information("Dumping Finished!");

    }

    private byte[] GetHeader()
    {
        var header = new byte[4];
        //version
        header.SetUInt16(0,Program.GameMajorVersion,true);
        header.SetUInt16(2,Program.GameMinorVersion,true);
        return header;
    }

    private string getFileName()
    {
        return $"{Program.GameMajorVersion}.{Program.GameMinorVersion}_{DateTime.Now:M-dd-yyyy_hh-mm-ss}.dntkap";
    }
}