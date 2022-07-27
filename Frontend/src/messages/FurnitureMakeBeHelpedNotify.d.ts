/* eslint-disable */
import type { FurnitureMakeSlot } from "./FurnitureMakeSlot.d.ts";
import type { FurnitureMakeBeHelpedData } from "./FurnitureMakeBeHelpedData.d.ts";

/**
 * CmdId: 4578
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface FurnitureMakeBeHelpedNotify {
  FurnitureMakeSlot?: FurnitureMakeSlot;
  FurnitureMakeHelpedData?: FurnitureMakeBeHelpedData;
}
