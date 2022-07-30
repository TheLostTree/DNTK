using Common;
using DNToolKit.Frontend;
using Serilog;

namespace DNToolKit;

public class Program
{

    public static FrontendManager FrontendManager = null!;

    public static void Main(string[] args)
    {
        //todo: add iridium compatability option
        
        Log.Logger = new LoggerConfiguration().MinimumLevel.Debug().WriteTo.Console().CreateLogger();
        Log.Information("DNToolKit for v2.8");


        //ugh figure out what to rename the sniffer namespace 
        var sniffer = new Sniffer.Sniffer();
        FrontendManager = new FrontendManager();
        sniffer.Start();
        

        ProtobufFactory.Initialize();


        Log.Information("Press Any Key to Stop!");
        Console.ReadKey(true);
        sniffer.Close();
        FrontendManager.Close();
    }
}