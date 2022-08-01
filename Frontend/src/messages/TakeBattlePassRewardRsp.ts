/* eslint-disable */
import type { ItemParam } from "./ItemParam.ts";
import type { BattlePassRewardTakeOption } from "./BattlePassRewardTakeOption.ts";

/**
 * CmdId: 2631
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface TakeBattlePassRewardRsp {
  ItemList?: ItemParam[];
  Retcode?: number;
  TakeOptionList?: BattlePassRewardTakeOption[];
}
