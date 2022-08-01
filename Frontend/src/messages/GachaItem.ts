/* eslint-disable */
import type { ItemParam } from "./ItemParam";
import type { GachaTransferItem } from "./GachaTransferItem";

export interface GachaItem {
  GachaItem?: ItemParam;
  IsGachaItemNew?: boolean;
  IsFlashCard?: boolean;
  TokenItemList?: ItemParam[];
  TransferItems?: GachaTransferItem[];
}
