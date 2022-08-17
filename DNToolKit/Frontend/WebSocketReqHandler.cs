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
        Log.Verbose("Websocket Message received: {data}",message);

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
                            Log.Debug("Setting socket {F} to type Iridium", webSocket.Socket.ConnectionInfo.ClientPort);
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
                                Log.Information("Added {type} to the whitelist", opcode);
                            }
                        }

                        webSocket.SetWhitelist(temp);
                    }

                    break;
                case "DecryptReq":
                    //i had an idea then forgot it
                    var req = b.GetValue("data")?.ToObject<DecryptReq>();
                    
                    Log.Information("Got DecryptRequest");
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
                            //todo: send back the type as well
                            var pkt = new WSPacket()
                            {
                                cmd = "DecryptRsp",
                                data = new Dictionary<string, object>()
                                {
                                    { "data", messa },
                                    { "type", opcode.ToString() }
                                }
                            };
                            var strig = JsonConvert.SerializeObject(pkt);
                            
                            Log.Information(strig);

                            webSocket.Socket?.Send(strig);
                        }
                    }

                    break;
                case "FileParseReq":
                    var fileparse = b.GetValue("data")?.ToObject<FileParseReq>();
                    if (fileparse is not null)
                    {
                        var bytes = Convert.FromBase64String(fileparse.B64Data);
                        Program.Sniffer.AddPcap(bytes);
                    }
                    break;
                default:
                    if (cmd is null) cmd = "????";
                    var stri = JsonConvert.SerializeObject(new WSPacket()
                    {
                        cmd = "ErrorNotify",
                        data = "No such handler for " + cmd
                    });
                    webSocket.Socket?.Send(stri);
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