using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Serilog;

namespace DNToolKit.Frontend;

public class WebSocketReqHandler
{
    private class WsPacket
    {
        public string Cmd = null!;
        public object Data = null!;
    }

    //todo: actually just make classes for everything instead of using jObject

    public static void HandleReq(string message, WsWrapper webSocket)
    {                    
        // Log.Verbose("Websocket Message received: {data}",message);

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
                            Log.Debug("Setting socket {F} to type Iridium", webSocket.Socket!.ConnectionInfo.ClientPort);
                        }
                    }
                    var str = JsonConvert.SerializeObject(new WsPacket()
                    {
                        Cmd = "ConnectRsp",
                        //todo: this is for iridium compatability
                        Data = new Dictionary<string, int>() { { "retcode", 0 } }
                    });

                    webSocket.Socket?.Send(str);
                    break;

            }
        }
        catch (Exception e)
        {
            Log.Error(e.ToString());
            webSocket.Socket?.Send(JsonConvert.SerializeObject(new WsPacket()
            {
                Cmd = "ErrorNotify",
                Data = e.ToString()
            }));
        }
    }
    
}