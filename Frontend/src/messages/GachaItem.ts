/* eslint-disable */
import type { ItemParam } from "./ItemParam.ts";
import type { GachaTransferItem } from "./GachaTransferItem.ts";

export interface GachaItem {
  GachaItem?: ItemParam;
  IsGachaItemNew?: boolean;
  IsFlashCard?: boolean;
  TokenItemList?: ItemParam[];
  TransferItems?: GachaTransferItem[];
}
