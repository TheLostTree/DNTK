using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading;
using Common;
using DNToolKit.Packet;
using Fleck;
using Newtonsoft.Json.Linq;
using Serilog;

namespace DNToolKit;

public class Program
{
    private static Dictionary<IWebSocketConnectionInfo, WSWrapper> _webSocketConnections = new();

    private class WSPacket
    {
        public string cmd;
        public object data;
    }

    public class WSWrapper
    {
        public enum WSType
        {
            Iridium,
            DNToolKit
        }

        public WSType Type;
        public IWebSocketConnection Socket;

    }
    public static void Main(string[] args)
    {
        //todo: add iridium compatability option
        
        Log.Logger = new LoggerConfiguration().MinimumLevel.Debug().WriteTo.Console().CreateLogger();
        Log.Information("DNToolKit for v2.8");


        //ugh figure out what to rename the sniffer namespace 
        var sniffer = new Sniffer.Sniffer();
        sniffer.Start();
        
        
        // var server = new WebSocketServer("ws://127.0.0.1:51222");
        
        //iridium
        var server = new WebSocketServer("ws://127.0.0.1:40510");
        ProtobufFactory.Initialize();
        
        server.Start(socket =>
        {
            socket.OnOpen = () =>
            {
                _webSocketConnections.Add(socket.ConnectionInfo,new WSWrapper()
                {
                    Type = WSWrapper.WSType.DNToolKit,
                    Socket = socket
                });
                // Console.WriteLine("Open!");
            };
            socket.OnClose = () =>
            {
                _webSocketConnections.Remove(socket.ConnectionInfo);
                // Console.WriteLine("Close!");
            };
            socket.OnMessage = (message) =>
            {
                var b = JObject.Parse(message);

                try
                {
                    var cmd = b.GetValue("cmd").ToObject<string>();
                    switch (cmd)
                    {
                        case "ConnectReq":
                            Log.Debug("Got ConnectReq to type Iridium");

                            var data = b.GetValue("data").ToObject<string>();
                            if (data is not null)
                            {
                                if (data == "iridium")
                                {
                                    Log.Debug("Setting socket {f} to type Iridium", socket.ConnectionInfo.ClientPort);
                                    _webSocketConnections[socket.ConnectionInfo].Type = WSWrapper.WSType.Iridium;
                                }
                            }
                            var str = JsonSerializer.Serialize(new WSPacket()
                            {
                                cmd = "ConnectRsp",
                                data = new Dictionary<string, int>() { { "sessionStarted", 0 } }
                            });

                            socket.Send(str);
                            break;
                        default:
                            var stri = JsonSerializer.Serialize(new WSPacket()
                            {
                                cmd = cmd.Replace("Req", "Rsp"),
                                data = 0
                            });
                            socket.Send(stri);
                            break;

                    }
                }
                catch (Exception e)
                {
                    Log.Error(e.ToString());
                }
            };
        });
        
        
        Log.Information("Press Any Key to Stop!");
        Console.ReadKey(true);
        server.Dispose();
        sniffer.Close();
    }

    public static void SendWSPacket(string data, WSWrapper.WSType wsType)
    {
        foreach (var webSocketConnection in _webSocketConnections)
        {
            if (webSocketConnection.Value.Type == wsType)
            {
                //Log.Debug("Sending data to socket {a} of type {type}", webSocketConnection.Key.ClientPort, wsType );
                webSocketConnection.Value.Socket.Send(data);
            }
        }
    }
    public static void SendWSPacket(byte[] data, WSWrapper.WSType wsType)
    {
        foreach (var webSocketConnection in _webSocketConnections)
        {
            if(webSocketConnection.Value.Type == wsType) webSocketConnection.Value.Socket.Send(data);
        }
    }
}