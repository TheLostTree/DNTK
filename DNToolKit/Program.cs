using System.Diagnostics;
using System.Text.Json;
using Common;
using DNToolKit.Frontend;
using Newtonsoft.Json;
using Serilog;

namespace DNToolKit;

public class Program
{

    public static FrontendManager FrontendManager = null!;
    public static Config Config = null!;
    public static Sniffer.Sniffer Sniffer = null!;

    public static ushort GameMajorVersion = 2;
    public static ushort GameMinorVersion = 8;
    

    private static string _configName = "./config.json";
    private static TaskCompletionSource tcs = new TaskCompletionSource();

    public static PcapDumper PcapDumper;

    public static void Main(string[] args)
    {
        
        
        Log.Logger = new LoggerConfiguration().MinimumLevel.Verbose().WriteTo.Console().CreateLogger();
        Log.Information("DNToolKit for v2.8");
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
        // AppDomain.CurrentDomain.ProcessExit += Close;


        tcs.Task.Wait();
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
        Log.Information("Finished cleaning up...");    
        tcs.SetResult();
    }
}