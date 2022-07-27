/* eslint-disable */
/**
 * CmdId: 8846
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface PlantFlowerGiveFriendFlowerReq {
  ScheduleId?: number;
  Uid?: number;
  FlowerNumMap?: { [key: number]: number };
}

export interface PlantFlowerGiveFriendFlowerReq_FlowerNumMapEntry {
  Key: number;
  Value: number;
}
