using System.Diagnostics;
using System.Text.Json;
using Common;
using Common.Protobuf;
using DNToolKit.Frontend;
using Newtonsoft.Json;
using Serilog;

namespace DNToolKit;

public class Program
{

    public static DNToolKit toolKit = null!;

    public static ushort GameMajorVersion = 3;
    public static ushort GameMinorVersion = 5;


    private static readonly TaskCompletionSource Tcs = new();
    private static FrontendManager frontendManager;

    public static void Main(string[] args)
    {
        
        
        Log.Logger = new LoggerConfiguration().MinimumLevel.Verbose().WriteTo.Console().CreateLogger();
        Log.Information("DNToolKit for v{Major}.{Minor}", GameMajorVersion, GameMinorVersion);

        toolKit = new DNToolKit();
        frontendManager = new FrontendManager(toolKit.Config.FrontendUrl);

        toolKit.AddPacketListener(frontendManager);

        
        toolKit.Start();
        
        
        Log.Information("Ready! Hit Control + C to stop...");
        Console.CancelKeyPress += Close;
        Tcs.Task.Wait();
    }

    public static uint Now()
    {
        return Convert.ToUInt32((DateTime.UtcNow.Ticks - DateTime.UnixEpoch.Ticks) / 10000000);
    }

    private static void Close(object? sender, ConsoleCancelEventArgs e)
    {        
        e.Cancel = true;
        Stop();
    }

    public static void Stop()
    {
        toolKit.Close();
        frontendManager.Close();
        Log.Information("Finished cleaning up...");
        Tcs.SetResult();
    }
}
