/* eslint-disable */
/**
 * CmdId: 458
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface Unk2700LKFKCNJFGIFServerRsp {
  QuestId?: number;
  Retcode?: number;
  LackedNpcList?: number[];
  LackedPlaceList?: number[];
  LackedNpcMap?: { [key: number]: number };
  LackedPlaceMap?: { [key: number]: number };
}

export interface Unk2700LKFKCNJFGIFServerRsp_LackedNpcMapEntry {
  Key: number;
  Value: number;
}

export interface Unk2700LKFKCNJFGIFServerRsp_LackedPlaceMapEntry {
  Key: number;
  Value: number;
}
