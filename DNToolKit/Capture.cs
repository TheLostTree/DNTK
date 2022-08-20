using DNToolKit.Sniffer;
using Serilog;
using SharpPcap;
using SharpPcap.LibPcap;

namespace DNToolKit;

public class Capture
{
    public string curFile;

    public bool running = false;
    private FileStream stream;
    private CaptureFileWriterDevice CaptureFileWriter;
    
    public Capture()
    {
        var dir = Directory.CreateDirectory(Program.Config.CaptureFolder);
        running = true;
        curFile = getFileName();
        Log.Information("Writing new Capture to File {filename}", curFile);
        
        // rip custom file dumper...
        stream = new FileStream(Path.Join(dir.FullName, curFile), FileMode.Append);
        stream.Write(GetHeader());
        stream.Flush();
    }
    
    public void Close()
    {
        stream.Flush();
        Log.Information("Dumping Finished!");
        stream = null;

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