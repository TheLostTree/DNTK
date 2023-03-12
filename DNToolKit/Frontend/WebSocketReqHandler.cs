using Fleck;
using Common;
using DNToolKit.Frontend;
using DNToolKit.Frontend.Models;
using Google.Protobuf;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Serilog;

namespace DNToolKit;

public class WebSocketReqHandler
{
    private class WSPacket
    {
        public string cmd;
        public object data;
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
                            webSocket.Type = WsWrapper.WsType.Iridium;
                        }
                    }
                    var str = JsonConvert.SerializeObject(new WSPacket()
                    {
                        cmd = "ConnectRsp",
                        //todo: this is for iridium compatability
                        data = new Dictionary<string, int>() { { "retcode", 0 } }
                    });

                    webSocket.Socket?.Send(str);
                    break;

            }
        }
        catch (Exception e)
        {
            Log.Error(e.ToString());
            webSocket.Socket?.Send(JsonConvert.SerializeObject(new WSPacket()
            {
                cmd = "ErrorNotify",
                data = e.ToString()
            }));
        }
    }
}