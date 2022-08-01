/* eslint-disable */
/**
 * CmdId: 2044
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface BlessingAcceptAllGivePicRsp {
  Retcode?: number;
  AcceptPicNumMap?: { [key: number]: number };
  AcceptIndexList?: number[];
}

export interface BlessingAcceptAllGivePicRsp_AcceptPicNumMapEntry {
  Key: number;
  Value: number;
}
