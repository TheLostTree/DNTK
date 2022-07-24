using System;
using System.Threading;
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
        
        Console.ReadKey(true);
        server.Dispose();
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

}