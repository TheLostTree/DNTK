/* eslint-disable */
/**
 * CmdId: 8547
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface PlantFlowerSetFlowerWishReq {
  FlowerNumMap?: { [key: number]: number };
  ScheduleId?: number;
}

export interface PlantFlowerSetFlowerWishReq_FlowerNumMapEntry {
  Key: number;
  Value: number;
}
