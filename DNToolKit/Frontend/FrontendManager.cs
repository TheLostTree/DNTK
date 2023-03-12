// using System.Text.Json;

using System.Text;
using Common;
using Fleck;
using Serilog;

namespace DNToolKit.Frontend;


//i could honestly make this a static class but adding more keywords is annoying

public class FrontendManager
{

    private readonly Dictionary<IWebSocketConnectionInfo, WsWrapper> _webSocketConnections = new();

    private readonly WebSocketServer _server;

    public void AddGamePacket(Packet.Packet packet)
    {
        foreach (var webSocketConnection in _webSocketConnections)
        {
            webSocketConnection.Value.AddGamePacket(packet);
        }
    }

    public FrontendManager()
    {
        FleckLog.LogAction = (level, message, _) => {
            switch(level) {
                case LogLevel.Debug:
                    // Log.Debug(message);
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
        
        
        _server = new WebSocketServer(Program.Config.FrontendUrl);

        _server.Start(socket =>
        {
            socket.OnOpen = () =>
            {
                _webSocketConnections.Add(socket.ConnectionInfo, new WsWrapper(this)
                {
                    Type = WsWrapper.WsType.DnToolKit,
                    Socket = socket
                });
                _webSocketConnections[socket.ConnectionInfo].Start();
                Log.Information("New connection to ws");
            };
            socket.OnClose = () =>
            {
                _webSocketConnections[socket.ConnectionInfo].Stop();
                _webSocketConnections.Remove(socket.ConnectionInfo);
            };
            socket.OnMessage = (message) => { WebSocketReqHandler.HandleReq(message, _webSocketConnections[socket.ConnectionInfo]); };
        });
    }

    public void SendWsPacket(string data, WsWrapper.WsType wsType)
    {
        foreach (var webSocketConnection in _webSocketConnections)
        {
            if (webSocketConnection.Value.Type == wsType)
            {
                try
                {
                    webSocketConnection.Value.Socket?.Send(data);
                }
                catch(Exception e)
                {
                    Log.Error(e.ToString());
                }
            }
        }
    }

    public void Close()
    {
        foreach (var webSocketConnection in _webSocketConnections)
        {
            webSocketConnection.Value.Socket?.Close();
        }
        Log.Information("Frontend Closed...");
    }
    
}

public class WsWrapper
{
    public enum WsType
    {
        Iridium,
        DnToolKit
    }
    private bool _running = false;

    public WsType Type;
    public IWebSocketConnection? Socket;

    private readonly FrontendManager _frontendManager;
    public readonly List<Packet.Packet> GamePacketQueue = new();
    

    public void Start()
    {
        _running = true;
        Task.Run(FrontendUpdate);
    }

    public void AddGamePacket(Packet.Packet packet)
    {
        // Console.WriteLine(packet);
        StringBuilder builder = new StringBuilder("""
{
    "cmd": "PacketNotify",
    "data": [
""");
        builder.Append(packet).Append("]}");
            
        // Log.Debug("{a}",builder);
        Console.WriteLine("yes?");

        GamePacketQueue.Clear();
        _frontendManager.SendWsPacket(builder.ToString(), Type);
    }
    
    public WsWrapper(FrontendManager frontendManager)
    {
        _frontendManager = frontendManager;
    }

    public void Stop()
    {
        _running = false;
    }
    
    private async Task FrontendUpdate()
    {
        while (_running)
        {
            if(GamePacketQueue.Count < 1)
            {
                await Task.Delay(10);
                continue;
            }


            


            await Task.Delay(10);
            
        }
    }

}