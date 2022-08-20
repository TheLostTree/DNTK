using DNToolKit.Sniffer;
using Serilog;
using SharpPcap;
using SharpPcap.LibPcap;

namespace DNToolKit;

public class PcapDumper
{
    public string curFile;

    public bool running = false;
    private FileStream stream;
    private CaptureFileWriterDevice CaptureFileWriter;
    
    public PcapDumper()
    {
        var dir = Directory.CreateDirectory(Program.Config.CaptureFolder);
        running = true;
        curFile = getFileName();
        Log.Information("Writing new Capture to File {filename}", curFile);

        CaptureFileWriter = new CaptureFileWriterDevice(Path.Join(dir.FullName, curFile));

    }



    public void PcapOnPacketArrival(object sender, PacketCapture e)
    {
        if(!CaptureFileWriter.Opened)CaptureFileWriter.Open();
        CaptureFileWriter.Write(e.GetPacket());
    }


    private string getFileName()
    {
        return $"{Program.GameMajorVersion}.{Program.GameMinorVersion}_{DateTime.Now:M-dd-yyyy_hh-mm-ss}.pcap";
    }
}