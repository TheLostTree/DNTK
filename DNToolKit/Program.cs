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
    public static CaptureDumper Dumper = null!;

    public static ushort GameMajorVersion = 2;
    public static ushort GameMinorVersion = 8;
    

    private static string _configName = "./config.json";

    public static void Main(string[] args)
    {
        Log.Logger = new LoggerConfiguration().MinimumLevel.Verbose().WriteTo.Console().CreateLogger();
        Log.Information("DNToolKit for v2.8");

        
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

        Dumper = new CaptureDumper();
        
        

        //ugh figure out what to rename the sniffer namespace 
        Sniffer = new Sniffer.Sniffer();
        FrontendManager = new FrontendManager();
        Sniffer.Start();
        

        ProtobufFactory.Initialize();

        Log.Information("Ready! Hit Control + C to stop...");


        Console.CancelKeyPress  += Close;
    }

    public static void Close(object? sender, ConsoleCancelEventArgs e)
    {
        Sniffer.Close();
        FrontendManager.Close();
        Dumper.Close();

        e.Cancel = true;

    }
}