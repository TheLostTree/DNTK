/* eslint-disable */
import type { FurnitureMakeSlot } from "./FurnitureMakeSlot.ts";
import type { FurnitureMakeBeHelpedData } from "./FurnitureMakeBeHelpedData.ts";

/**
 * CmdId: 4578
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface FurnitureMakeBeHelpedNotify {
  FurnitureMakeSlot?: FurnitureMakeSlot;
  FurnitureMakeHelpedData?: FurnitureMakeBeHelpedData;
}
