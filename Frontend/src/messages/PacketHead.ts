/* eslint-disable */
import Long from "long";

export interface PacketHead {
  PacketId?: number;
  RpcId?: number;
  ClientSequenceId?: number;
  EnetChannelId?: number;
  EnetIsReliable?: number;
  SentMs?: Long;
  UserId?: number;
  UserIp?: number;
  UserSessionId?: number;
  RecvTimeMs?: Long;
  RpcBeginTimeMs?: number;
  ExtMap?: { [key: number]: number };
  SenderAppId?: number;
  SourceService?: number;
  TargetService?: number;
  ServiceAppIdMap?: { [key: number]: number };
  IsSetGameThread?: boolean;
  GameThreadIndex?: number;
}

export interface PacketHead_ExtMapEntry {
  Key: number;
  Value: number;
}

export interface PacketHead_ServiceAppIdMapEntry {
  Key: number;
  Value: number;
}
