using Fleck;
using DNToolKit.AnimeGame;
using IridiumBackend.Extensions;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using IridiumBackend.Frontend.Models;

namespace IridiumBackend.Frontend
{
    public class FrontendManager
    {
        private const string PacketFormat_ = "{{\"cmd\": \"PacketNotify\",\"data\": [{0}]}}";

        private readonly List<IWebSocketConnection> _webSocketConnections = new();
        private readonly WebSocketServer _server;

        public FrontendManager(string webSocketUrl)
        {
            FleckLog.LogAction = (_, _, _) => { };

            _server = new WebSocketServer(webSocketUrl);
            _server.Start(ConfigureWebSocketServer);
        }

        public void SendPacket(AnimeGamePacket packet)
        {
            SendWebSocketPacket(string.Format(PacketFormat_, packet.ToWebSocketMessage()));
        }

        public void Close()
        {
            foreach (var webSocketConnection in _webSocketConnections)
            {
                webSocketConnection.Close();
            }

            _server.Dispose();
        }

        private void ConfigureWebSocketServer(IWebSocketConnection socket)
        {
            socket.OnOpen = () => _webSocketConnections.Add(socket);
            socket.OnClose = () => _webSocketConnections.Remove(socket);
            socket.OnMessage = message => HandleRequest(socket, message);
        }

        private void SendWebSocketPacket(string data)
        {
            foreach (var webSocketConnection in _webSocketConnections)
            {
                try
                {
                    webSocketConnection.Send(data);
                }
                catch
                {
                    // Ignored
                }
            }
        }

        private void HandleRequest(IWebSocketConnection webSocket, string message)
        {
            var b = JObject.Parse(message);
            try
            {
                var cmd = b.GetValue("cmd")?.ToObject<string>();
                switch (cmd)
                {
                    case "ConnectReq":
                        var data = b.GetValue("data")?.ToObject<string>();
                        if (data is not null)
                        {
                            if (data.ToLower() == "iridium")
                            {
                                // Log.Debug("Setting socket {F} to type Iridium", webSocket.Socket!.ConnectionInfo.ClientPort);
                            }
                        }

                        var str = JsonConvert.SerializeObject(new WebSocketPacket
                        {
                            Cmd = "ConnectRsp",
                            // This is for iridium compatability
                            Data = new Dictionary<string, int> { ["retcode"] = 0 }
                        });

                        webSocket.Send(str);
                        break;

                }
            }
            catch (Exception e)
            {
                // Log.Error(e.ToString());
                webSocket.Send(JsonConvert.SerializeObject(new WebSocketPacket
                {
                    Cmd = "ErrorNotify",
                    Data = e.ToString()
                }));
            }
        }
    }
}
