/* eslint-disable */
/**
 * CmdId: 281
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetScenePointRsp {
  NotExploredDungeonEntryList?: number[];
  ToBeExploreDungeonEntryList?: number[];
  LockedPointList?: number[];
  UnhidePointList?: number[];
  Retcode?: number;
  BelongUid?: number;
  UnlockedPointList?: number[];
  UnlockAreaList?: number[];
  HidePointList?: number[];
  SceneId?: number;
  NotInteractDungeonEntryList?: number[];
  GroupUnlimitPointList?: number[];
}
