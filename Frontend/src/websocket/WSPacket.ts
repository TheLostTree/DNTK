import type { PacketHead } from "../messages/PacketHead";

export type WSPacketTypes = ["PacketNotify"| "BlankNotify" | "ConnectReq"];

export type WSPacket = {
    cmd: string;
    data: any;
}

export interface PacketNotifyData{
    PacketHead: PacketHead;
    PacketData: any;
    CmdID: string;
    Sender: "Server"|"Client";
}


export interface PacketNotifyDT<T> extends PacketNotifyData{
    PacketHead: PacketHead;
    PacketData: T;
    CmdID: string;
    Sender: "Server"|"Client";
}

export interface PacketNotify extends WSPacket{
    cmd: "PacketNotify";
    data: Array<PacketNotifyData>
}
export interface BlankNotifyData extends WSPacket{
    cmd: "BlankNotify";
    data: any;
};
