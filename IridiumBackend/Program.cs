using DNToolKit;
using DNToolKit.Frontend;
using Serilog;

namespace IridiumBackend;

public class Program
{
    private static DNToolKit.DNToolKit toolKit = new();

    public static ushort GameMajorVersion = 3;
    public static ushort GameMinorVersion = 5;

    private static readonly TaskCompletionSource Tcs = new();
    private static FrontendManager frontendManager;

    public static void Main(string[] args)
    {
        Log.Logger = new LoggerConfiguration().MinimumLevel.Verbose().WriteTo.Console().CreateLogger();
        Log.Information("DNToolKit for v{Major}.{Minor}", GameMajorVersion, GameMinorVersion);

        frontendManager = new FrontendManager(toolKit.Config.FrontendUrl);
        toolKit.AddPacketListener(frontendManager);

        toolKit.LogAction = (level, message) =>
        {
            switch (level)
            {
                case LogLevel.Debug:
                    Log.Debug(message);
                    break;
                case LogLevel.Error:
                    Log.Error(message);
                    break;
                case LogLevel.Warn:
                    Log.Warning(message);
                    break;
                default:
                    Log.Information(message);
                    break;
            }
        };

        toolKit.Start();

        Log.Information("Ready! Hit Control + C to stop...");
        Console.CancelKeyPress += Close;
        Tcs.Task.Wait();
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