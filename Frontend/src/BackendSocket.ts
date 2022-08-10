import type { PacketNotify, WSPacket } from "./lib/WSPacket";
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


    constructor(connectionString:string){
        this.ws = new WebSocket(connectionString);
        this.connect();
    }

    connect(){
        this.ws.addEventListener('open', () => {
            console.log('connected');
            this.ws.send(JSON.stringify({cmd:"ConnectReq", data:"dntk"}));
        });
          
          
        this.ws.addEventListener('close', () => {
            console.log('closed');
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
        if(typeof msg === "object"){
            let data = JSON.stringify(msg);
            console.log(data)
            this.ws.send(data);
            return
        }
        this.ws.send(msg);
    }

    onWSPacket(packet:WSPacket){
        console.log("onWSPacket", packet);
        switch(packet.cmd){
            case "PacketNotify":
                this.emit("PacketNotify", <PacketNotify>packet);
                break;
            default:
                console.log("unknown packet: ", packet);
                break;
        }
    }
}

function isWSPacket(obj:any):obj is WSPacket{
    return typeof obj.cmd === "string";
}