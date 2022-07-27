/* eslint-disable */
/**
 * CmdId: 7
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface PingReq {
  ClientTime?: number;
  UeTime?: number;
  TotalTickTime?: number;
  ScData?: Buffer;
  Seq?: number;
}
