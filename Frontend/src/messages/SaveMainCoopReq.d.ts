/* eslint-disable */
/**
 * CmdId: 1975
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface SaveMainCoopReq {
  NormalVarMap?: { [key: number]: number };
  SelfConfidence?: number;
  SavePointId?: number;
  TempVarMap?: { [key: number]: number };
  Id?: number;
}

export interface SaveMainCoopReq_NormalVarMapEntry {
  Key: number;
  Value: number;
}

export interface SaveMainCoopReq_TempVarMapEntry {
  Key: number;
  Value: number;
}
