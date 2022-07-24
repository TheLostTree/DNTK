using System;
using System.Threading;
using DNToolKit.Packet;
using Fleck;
using Serilog;

namespace DNToolKit;

public class Program
{
    private static Dictionary<IWebSocketConnectionInfo, IWebSocketConnection> _webSocketConnections = new();
    public static void Main()
    {
        Log.Logger = new LoggerConfiguration().MinimumLevel.Debug().WriteTo.Console().CreateLogger();
        Log.Information("DNToolKit for v2.8");


        //ugh figure out what to rename the sniffer namespace 
        var sniffer = new Sniffer.Sniffer();
        TestBF();
        sniffer.Start();
        
        
        var server = new WebSocketServer("ws://127.0.0.1:51222");
        server.Start(socket =>
        {
            socket.OnOpen = () =>
            {
                _webSocketConnections.Add(socket.ConnectionInfo,socket);
                Console.WriteLine("Open!");
            };
            socket.OnClose = () =>
            {
                _webSocketConnections.Remove(socket.ConnectionInfo);
                Console.WriteLine("Close!");
            };
            socket.OnMessage = message => socket.Send(message);
        });
        
        
        Console.WriteLine("Press Any Key to Stop!");
        Console.ReadKey(true);
        server.Dispose();
        sniffer.Close();
    }

    public static void SendWSPacket(string data)
    {
        foreach (var webSocketConnection in _webSocketConnections)
        {
            webSocketConnection.Value.Send(data);
        }
    }
    public static void SendWSPacket(byte[] data)
    {
        foreach (var webSocketConnection in _webSocketConnections)
        {
            webSocketConnection.Value.Send(data);
        }
    }
    static void TestBF()
    {
        //static long GetTotalTicks() => 0x18159E68C18;
        //int randSeed = (int)GetTotalTicks();

        //var rand = new Random(randSeed);
        //Console.WriteLine(rand.NextSafeUInt64() == 5335877035264421888ul);

        long recvTime = 1655293841481 + 10000;
        byte[] keyPrefix = new byte[] { 0xD0 ^ 0x45, 0xAC ^ 0x67 };

        for (long time = recvTime; time > recvTime - 10000; time--)
        {
            var rand = new Random((int)time);

            var clientSeed = rand.NextSafeUInt64();
            var seed = 5518277363375230666ul ^ clientSeed;

            if (clientSeed == 59954822902317360ul)
                Console.WriteLine("Mero");

            var key = new MTKey(seed);

            if (key.Bytes[0] == keyPrefix[0] && key.Bytes[1] == keyPrefix[1])
            {
                Console.WriteLine($"time: {time}");
                Console.WriteLine($"seed: {seed}");
                break;
            }
        }
    }

}