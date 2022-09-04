import App from './App.svelte'
import BackendSocket from './websocket/BackendSocket'
import PacketList from "./lib/PacketList";
import Router from "./Router";
import World from "./world/World";
import type {PacketNotify} from "./websocket/WSPacket";


const app = new App({
    target: document.getElementById('app')
})

export default app

const backendSocket = new BackendSocket("ws://127.0.0.1:40510");
const packetList = new PacketList();
const router = new Router();
const world = new World();

const log = new Array<string>();




export {world, packetList, backendSocket, router, log}

backendSocket.on("PacketNotify", (data: PacketNotify) => {
    packetList.addPackets(data.data);
});

packetList.onAddPackets = (packets) => {
    //console.log(`Recieved ${packets.length} packets`);
    packets.forEach(pkt =>{
        router.handle(pkt.CmdID, pkt);
    })
}



// send message to server every 10 ms
// setInterval(() => {
//   ws.send("hi!");
// }, 1000);

