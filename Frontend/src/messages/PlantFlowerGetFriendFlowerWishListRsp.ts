/* eslint-disable */
import type { PlantFlowerFriendFlowerWishData } from "./PlantFlowerFriendFlowerWishData.ts";

/**
 * CmdId: 8511
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlantFlowerGetFriendFlowerWishListRsp {
  Retcode?: number;
  ScheduleId?: number;
  FriendFlowerWishList?: PlantFlowerFriendFlowerWishData[];
}
