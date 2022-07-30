using Fleck;
using System.Text.Json;
using Common;
using DNToolKit.Frontend;
using Google.Protobuf;
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
    private class DecryptReqPkt
    {
        public string Type;
        public string B64Data;
    }
    public static void HandleReq(string message, WsWrapper webSocket)
    {
        var b = JObject.Parse(message);
        try
        {
            var cmd = b.GetValue("cmd")?.ToObject<string>();
            switch (cmd)
            {
                case "ConnectReq":
                    Log.Debug("Got ConnectReq to type Iridium");

                    var data = b.GetValue("data")?.ToObject<string>();
                    if (data is not null)
                    {
                        if (data.ToLower() == "iridium")
                        {
                            Log.Debug("Setting socket {F} to type Iridium", webSocket.Socket.ConnectionInfo.ClientPort);
                            webSocket.Type = WsWrapper.WsType.Iridium;
                        }
                    }
                    var str = JsonSerializer.Serialize(new WSPacket()
                    {
                        cmd = "ConnectRsp",
                        //todo: this is for iridium compatability
                        data = new Dictionary<string, int>() { { "sessionStarted", 0 } }
                    });

                    webSocket.Socket.Send(str);
                    break;
                case "SetWhitelistReq":
                    var stropcodes = b.GetValue("data")?.ToObject<string[]>();
                    if (stropcodes is not null)
                    {
                        List<Opcode> temp = new();
                        foreach (var strOpcode in stropcodes)
                        {
                            if (Enum.TryParse(strOpcode, out Opcode opcode))
                            {
                                temp.Add(opcode);
                            }
                        }

                        webSocket.SetWhitelist(temp);
                    }
                    
                    break;
                case "DecryptReq":
                    //i had an idea then forgot it
                    var req = b.GetValue("data")?.ToObject<DecryptReqPkt>();
                    
                    if (req is not null)
                    {
                        if (Enum.TryParse(req.Type, out Opcode opcode))
                        {
                            var messa = ProtobufFactory.GetPacketTypeParser(opcode)
                                ?.ParseFrom(Convert.FromBase64String(req.B64Data));

                            if (messa is null)
                            {
                                throw new Exception("Could not parse DecryptReq packet");
                            }
                            var strig = JsonSerializer.Serialize(new WSPacket()
                            {
                                cmd = "DecryptReq",
                                data = messa
                            });
                            webSocket.Socket?.Send(strig);
                        }
                    }

                    break;
                default:
                    if (cmd is null) cmd = "????";
                    var stri = JsonSerializer.Serialize(new WSPacket()
                    {
                        cmd = cmd.Replace("Req", "Rsp"),
                        data = 0
                    });
                    webSocket.Socket.Send(stri);
                    break;
            }
        }
        catch (Exception e)
        {
            Log.Error(e.ToString());
            webSocket.Socket?.Send(JsonSerializer.Serialize(new WSPacket()
            {
                cmd = "ErrorNotify",
                data = e.ToString()
            }));
        }
    }
}