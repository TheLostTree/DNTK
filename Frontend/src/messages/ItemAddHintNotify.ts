/* eslint-disable */
import type { Vector } from "./Vector";
import type { ItemHint } from "./ItemHint";

/**
 * CmdId: 607
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ItemAddHintNotify {
  IsPositionValid?: boolean;
  QuestId?: number;
  Reason?: number;
  IsGeneralRewardHiden?: boolean;
  ItemList?: ItemHint[];
  IsTransferedFromAvatarCard?: boolean;
  Position?: Vector;
  OverflowTransformedItemList?: ItemHint[];
}
