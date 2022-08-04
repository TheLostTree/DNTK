import type { PacketNotifyData } from "./WSPacket";

export default class PacketList{
    private packetList = new Array<PacketNotifyData>()

    public onAddPackets: (packets:Array<PacketNotifyData>)=>void;
    
    addPackets(packets: Array<PacketNotifyData>){
        // merge packets and packet List based on PacketHead.SentMs
        
        // look into benchmarking a merge sort type thing vs this
        // merge sort has less comparisons but more memory usage with each new array so idk
        
        // im honestly not quite sure we need to do this sort *that* badly?
        // look into checking if all the incoming packets are in order
        // monitor this performance wise bc if this becomes a problem i'll have to figure something else out

        this.packetList = this.packetList.concat(packets);
        
        
        this.packetList.sort((a, b) => {

            
            // this might honestly work better
            // return a.PacketHead.SentMs.subtract(b.PacketHead.SentMs).isNegative() ? -1 : 1;;

            if(a.PacketHead.SentMs.greaterThan(b.PacketHead.SentMs)){
                return 1;
            }else if(a.PacketHead.SentMs.lessThan(b.PacketHead.SentMs)){
                return -1;
            }else{
                return 0;
            }
        });

        if(this.onAddPackets){
            this.onAddPackets(this.packetList);
        }
    }

    public getPackets(){
        return this.packetList;
    }
    
}