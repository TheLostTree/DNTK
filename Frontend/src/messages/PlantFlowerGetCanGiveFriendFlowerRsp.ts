/* eslint-disable */
/**
 * CmdId: 8766
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlantFlowerGetCanGiveFriendFlowerRsp {
  FlowerNumMap?: { [key: number]: number };
  ScheduleId?: number;
  Retcode?: number;
}

export interface PlantFlowerGetCanGiveFriendFlowerRsp_FlowerNumMapEntry {
  Key: number;
  Value: number;
}
