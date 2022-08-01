/* eslint-disable */
import type { AddNoGachaAvatarCardTransferItem } from "./AddNoGachaAvatarCardTransferItem.ts";

/**
 * CmdId: 1655
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface AddNoGachaAvatarCardNotify {
  TransferItemList?: AddNoGachaAvatarCardTransferItem[];
  InitialPromoteLevel?: number;
  AvatarId?: number;
  IsTransferToItem?: boolean;
  Reason?: number;
  InitialLevel?: number;
  ItemId?: number;
}
