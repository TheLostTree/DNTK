/* eslint-disable */
import type { Vector } from "./Vector.ts";
import type { ItemHint } from "./ItemHint.ts";

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
