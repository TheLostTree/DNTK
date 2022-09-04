import Long from "long";
import type { PacketNotifyData } from "../websocket/WSPacket";

export default class PacketList{
    private packetList = new Array<PacketNotifyData>()

    private latestMS: Long = Long.fromValue(0);

    public onAddPackets: (newPackets:Array<PacketNotifyData>)=>void;

    addPackets(packets: Array<PacketNotifyData>){
        // merge packets and packet List based on PacketHead.SentMs
        
        // look into benchmarking a merge sort type thing vs this
        // merge sort has less comparisons but more memory usage with each new array so idk
        
        // im honestly not quite sure we need to do this sort *that* badly?
        // look into checking if all the incoming packets are in order
        // monitor this performance wise bc if this becomes a problem i'll have to figure something else out

        let earliestms = Long.fromValue(packets.sort(this.longMSsort)[0].PacketHead.SentMs);

        if(earliestms.greaterThan(this.latestMS)){
            this.latestMS = earliestms;

            this.packetList = this.packetList.concat(packets);
        }else{
            console.log("packets were out of order")
            this.packetList = this.packetList.concat(packets);
        
        
            this.packetList.sort(this.longMSsort);
            this.latestMS = Long.fromValue(this.packetList[this.packetList.length-1].PacketHead.SentMs);
        }

        if(this.onAddPackets){
            this.onAddPackets(packets);
        }
    }

    public getPackets(){
        return this.packetList;
    }

    public longMSsort = (a:PacketNotifyData, b) => {

            
        // this might honestly work better
        return Long.fromValue(a.PacketHead.SentMs).subtract(Long.fromValue(b.PacketHead.SentMs)).isNegative() ? -1 : 1;;

        // if(Long.fromValue(a.PacketHead.SentMs).greaterThan(Long.fromValue(b.PacketHead.SentMs))){
        //     return 1;
        // }else if(a.PacketHead.SentMs.lessThan(b.PacketHead.SentMs)){
        //     return -1;
        // }else{
        //     return 0;
        // }
    }
    
}