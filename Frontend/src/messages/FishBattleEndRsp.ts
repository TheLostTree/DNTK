/* eslint-disable */
import type { FishBattleResult } from "./FishBattleResult.ts";
import type { ItemParam } from "./ItemParam.ts";

/**
 * CmdId: 5842
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface FishBattleEndRsp {
  IsGotReward?: boolean;
  RewardItemList?: ItemParam[];
  TalentItemList?: ItemParam[];
  DropItemList?: ItemParam[];
  Retcode?: number;
  NoRewardReason?: FishBattleEndRsp_FishNoRewardReason;
  BattleResult?: FishBattleResult;
}

export enum FishBattleEndRsp_FishNoRewardReason {
  FISH_NO_REWARD_REASON_NONE = 0,
  FISH_NO_REWARD_REASON_ACTIVITY_LIMIT = 1,
  FISH_NO_REWARD_REASON_BAG_LIMIT = 2,
  FISH_NO_REWARD_REASON_POOL_LIMIT = 3,
  UNRECOGNIZED = -1,
}
