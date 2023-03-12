// using System.Text.Json;

using System.Text;
using Common;
using DNToolKit.Listeners;
using DNToolKit.Protocol;
using Fleck;
using Serilog;

namespace DNToolKit.Frontend;


//i could honestly make this a static class but adding more keywords is annoying

public class FrontendManager : IPacketListener
{

    private readonly Dictionary<IWebSocketConnectionInfo, WsWrapper> _webSocketConnections = new();

    private readonly WebSocketServer _server;

    public void OnPacket(Packet packet)
    {
        foreach (var webSocketConnection in _webSocketConnections)
        {
            webSocketConnection.Value.AddGamePacket(packet);
        }
    }

    public FrontendManager(string wsurl)
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
        
        
        _server = new WebSocketServer(wsurl);

        _server.Start(socket =>
        {
            socket.OnOpen = () =>
            {
                _webSocketConnections.Add(socket.ConnectionInfo, new WsWrapper(this)
                {
                    Socket = socket
                });
                Log.Information("New connection to ws");
            };
            socket.OnClose = () =>
            {
                _webSocketConnections.Remove(socket.ConnectionInfo);
            };
            socket.OnMessage = (message) => { WebSocketReqHandler.HandleReq(message, _webSocketConnections[socket.ConnectionInfo]); };
        });
    }

    public void SendWsPacket(string data)
    {
        foreach (var webSocketConnection in _webSocketConnections)
        {
            try
            {
                if (webSocketConnection.Value.Socket is null)
                {
                    Console.WriteLine("weird?");
                }
                webSocketConnection.Value.Socket?.Send(data);
                // Console.WriteLine(data);

            }
            catch(Exception e)
            {
                Log.Error(e.ToString());
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

    public IWebSocketConnection? Socket;

    private readonly FrontendManager _frontendManager;
    


    public void AddGamePacket(Packet packet)
    {
        // Console.WriteLine(packet);
        StringBuilder builder = new StringBuilder("""
{
    "cmd": "PacketNotify",
    "data": [
""");
        builder.Append(packet).Append("]}");

        _frontendManager.SendWsPacket(builder.ToString());
    }
    
    public WsWrapper(FrontendManager frontendManager)
    {
        _frontendManager = frontendManager;
    }

}