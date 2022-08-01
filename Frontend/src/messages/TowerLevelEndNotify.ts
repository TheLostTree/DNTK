/* eslint-disable */
import type { ItemParam } from "./ItemParam.ts";

/**
 * CmdId: 2495
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface TowerLevelEndNotify {
  NextFloorId?: number;
  RewardItemList?: ItemParam[];
  ContinueState?: number;
  IsSuccess?: boolean;
  FinishedStarCondList?: number[];
}

export enum TowerLevelEndNotify_ContinueStateType {
  CONTINUE_STATE_TYPE_CAN_NOT_CONTINUE = 0,
  CONTINUE_STATE_TYPE_CAN_ENTER_NEXT_LEVEL = 1,
  CONTINUE_STATE_TYPE_CAN_ENTER_NEXT_FLOOR = 2,
  UNRECOGNIZED = -1,
}
