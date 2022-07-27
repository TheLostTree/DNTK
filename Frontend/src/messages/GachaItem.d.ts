/* eslint-disable */
import type { ItemParam } from "./ItemParam.d.ts";
import type { GachaTransferItem } from "./GachaTransferItem.d.ts";

export interface GachaItem {
  GachaItem?: ItemParam;
  IsGachaItemNew?: boolean;
  IsFlashCard?: boolean;
  TokenItemList?: ItemParam[];
  TransferItems?: GachaTransferItem[];
}
