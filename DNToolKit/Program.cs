using System;
using System.Threading;
using Serilog;

namespace DNToolKit;

public class Program
{
    public static void Main()
    {
        Log.Logger = new LoggerConfiguration().MinimumLevel.Debug().WriteTo.Console().CreateLogger();
        Log.Information("DNToolKit for v2.8");
    }

}