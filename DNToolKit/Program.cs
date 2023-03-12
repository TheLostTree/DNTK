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

    public static FrontendManager FrontendManager = null!;
    public static Config Config = null!;
    public static Sniffer.Sniffer Sniffer = null!;

    public static ushort GameMajorVersion = 3;
    public static ushort GameMinorVersion = 5;
    

    private static readonly string _configName = "./config.json";
    private static readonly TaskCompletionSource _tcs = new TaskCompletionSource();

    public static PcapDumper PcapDumper;

    public static void Main(string[] args)
    {
        
        
        Log.Logger = new LoggerConfiguration().MinimumLevel.Verbose().WriteTo.Console().CreateLogger();
        Log.Information("DNToolKit for v{a}.{n}", GameMajorVersion, GameMinorVersion);
        KeyBruteForcer.LoadOldSeeds();
        // var key = KeyBruteForcer.BruteForce(senttime: 1658814410247, serverKey: 4502709363913224634, testBuffer: new byte[] { 0x0B, 0xB9});
        //
        // return;
        
        if (!File.Exists(_configName))
        {
            File.WriteAllText(_configName,JsonConvert.SerializeObject(Config.Default));
            Config = Config.Default;
        }
        else
        {
            Config = JsonConvert.DeserializeObject<Config>(File.ReadAllText(_configName));
            if (Config is null)
            {
                Config = Config.Default;
                Log.Error("Invalid Config File! Using Default...");
            }
        }
        

        PcapDumper = new PcapDumper();

        Sniffer = new Sniffer.Sniffer();




        //ugh figure out what to rename the sniffer namespace 
        
        FrontendManager = new FrontendManager();
        Sniffer.Start(false);
        

        ProtobufFactory.Initialize();

        Log.Information("Ready! Hit Control + C to stop...");

        //Capture.ParseFromBytes(File.ReadAllBytes("./Captures/"));

        Console.CancelKeyPress += Close;


        _tcs.Task.Wait();
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
        Sniffer.Close();
        FrontendManager.Close();
        KeyBruteForcer.StoreOldSeeds();
        Log.Information("Finished cleaning up...");    
        
        _tcs.SetResult();
    }
}
