using DNToolKit.Sniffer;
using Serilog;
using SharpPcap;
using SharpPcap.LibPcap;

namespace DNToolKit;

public class PcapDumper
{
    public string CurFile;

    private FileStream _stream;
    private readonly CaptureFileWriterDevice _captureFileWriter;
    
    public PcapDumper()
    {
        var dir = Directory.CreateDirectory(Program.Config.CaptureFolder);
        CurFile = GetFileName();
        Log.Information("Writing new Capture to File {filename}", CurFile);

        _captureFileWriter = new CaptureFileWriterDevice(Path.Join(dir.FullName, CurFile));
    }

    public void Close()
    {
        _captureFileWriter.Close();
    }



    public void PcapOnPacketArrival(object sender, PacketCapture e)
    {
        if(!_captureFileWriter.Opened) _captureFileWriter.Open();
        _captureFileWriter.Write(e.GetPacket());
    }


    private string GetFileName()
    {
        return $"{Program.GameMajorVersion}.{Program.GameMinorVersion}_{DateTime.Now:M-dd-yyyy_hh-mm-ss}.pcap";
    }
}