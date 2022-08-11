// using System.Text.Json;

using Common;
using DNToolKit.Frontend.Models;
using Fleck;
using Newtonsoft.Json;
using Serilog;

namespace DNToolKit.Frontend;


//i could honestly make this a static class but adding more keywords is annoying

public class FrontendManager
{

    private Dictionary<IWebSocketConnectionInfo, WsWrapper> _webSocketConnections = new();

    public readonly HashSet<Opcode> GlobalPacketList = new HashSet<Opcode>();

    private readonly WebSocketServer _server;

    public void AddGamePacket(Packet.Packet packet)
    {
        foreach (var webSocketConnection in _webSocketConnections)
        {
            if (webSocketConnection.Value.FilterOverride || webSocketConnection.Value.Wants(packet.PacketType))
            {
                webSocketConnection.Value.AddGamePacket(packet);
            }
        }
    }

    public FrontendManager()
    {
        FleckLog.LogAction = (level, message, ex) => {
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
                    Type = WsWrapper.WsType.DNToolKit,
                    Socket = socket
                });
                _webSocketConnections[socket.ConnectionInfo].Start();
            };
            socket.OnClose = () =>
            {
                _webSocketConnections[socket.ConnectionInfo].Stop();
                _webSocketConnections.Remove(socket.ConnectionInfo);
                Log.Verbose("WS Disconnect received");
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
                //Log.Debug("Sending data to socket {a} of type {type}", webSocketConnection.Key.ClientPort, wsType );
                try
                {
                    webSocketConnection.Value.Socket?.Send(data);
                    //Log.Debug(data);

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
        DNToolKit
    }
    private bool _running = false;

    public WsType Type;
    public IWebSocketConnection? Socket;

    private List<Opcode> _whitelist = new List<Opcode>();
    public bool FilterOverride = true;
    private readonly FrontendManager _frontendManager;
    public readonly List<Packet.Packet> GamePacketQueue = new();
    

    public void Start()
    {
        _running = true;
        Task.Run(FrontendUpdate);
    }

    public void AddGamePacket(Packet.Packet? packet)
    {
        if (packet is null)
        {
            Log.Warning("bro wtf");
        }
        else
        {
            GamePacketQueue.Add(packet);

        }
    }

    public bool Wants(Opcode opcode)
    {
        return _whitelist.Contains(opcode);
    }

    public void SetWhitelist(List<Opcode> newWhitelist)
    {
        _whitelist = newWhitelist;
        // todo: add a global list of packets to grab so we can cut down on parsing
        // _frontendManager.UpdateGlobalFilter(newFilter);

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
            try
            {
                if (GamePacketQueue.Count < 2) continue;
                //mot quite ideal?

                var copy = GamePacketQueue.ToArray().Where(x => x is not null);
                GamePacketQueue.Clear();

                //theres a wierd object reference not set to an instance of an object thing here? try to fixo?
                var data2 = new List<object>();
                foreach (var packet in copy)
                {
                    try
                    {
                        var obj = packet.GetObj(Type);
                        if (obj is not null)
                        {
                            data2.Add(obj);
                        }
                        else
                        {
                            Log.Warning("packet.GetObj was null wtf?");
                        }
                    }
                    catch (Exception e)
                    {
                        Log.Error(e.ToString());
                        Log.Warning($"{packet.PacketType} failed!");
                    }
                }

                //data2.Sort();

                var jsonObj = new PacketNotify()
                {
                    cmd = "PacketNotify",
                    data = data2
                };
                var data = JsonConvert.SerializeObject(jsonObj);
                _frontendManager.SendWsPacket(data, Type);
            }
            catch (Exception e)
            {
                Log.Error(e.ToString());
            }
            finally
            {
                await Task.Delay(200);
            }

            
        }
    }

}