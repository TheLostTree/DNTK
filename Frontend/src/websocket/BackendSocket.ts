import type { PacketNotify, WSPacket } from "./WSPacket";
import jsonBI from "json-bigint";

export default class BackendSocket{
    private ws: WebSocket;
    private wstimer: NodeJS.Timeout;

    private events: Record<string, (data: any) => void> = {};

    on(name: string,callback: (data: any) => void){
        this.events[name] = callback;
    }

    emit(name: string, data: any){
        if(this.events[name]){
            this.events[name](data);
        }
    }


    constructor(public connectionString:string){
        this.connect();
    }


    /**
     * 
     * @param data make sure that its the right name for the packet plssss
     */
    setWhitelist(data: string[]){
        this.send({
            cmd: "SetWhitelistReq",
            data: data
        })
    }

    connect(){
        this.ws = new WebSocket(this.connectionString);

        this.ws.addEventListener('open', () => {
            console.log('connected');
            this.ws.send(JSON.stringify({cmd:"ConnectReq", data:"dntk"}));
            //this.setWhitelist(["SceneEntityAppearNotify", "SceneEntityDisappearNotify"]);
        });
          
          
        this.ws.addEventListener('close', () => {
            clearTimeout(this.wstimer);
            this.wstimer = setTimeout(()=>this.connect(), 1000)
            console.log("will attempt to reconnect in 1 second")
        });
        
          
        this.ws.addEventListener('error', (e) => {
            console.log('error', e);
            this.ws.close();
        });
          
        this.ws.addEventListener('message', (data: MessageEvent) => {
            try{
                let obj = jsonBI.parse(data.data);
                if(isWSPacket(obj)){
                    this.onWSPacket(obj);
                }
    
            }catch(error){
                console.log("message parsing error...", error);
            }
        });
    }

    send(msg: string | object){
        console.log(msg)
        if(typeof msg === "object"){
            let data = JSON.stringify(msg);
            console.log(data)
            this.ws.send(data);
            return
        }
        this.ws.send(msg);
    }

    onWSPacket(packet:WSPacket){
        // console.log(packet.cmd)
        switch(packet.cmd){
            case "PacketNotify":
                this.emit("PacketNotify", <PacketNotify>packet);
                break;
            default:
                // console.log("unknown packet: ", packet.cmd);
                break;
        }
    }
}

function isWSPacket(obj:any):obj is WSPacket{
    return typeof obj.cmd === "string";
}