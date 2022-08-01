/* eslint-disable */
import type { FurnitureMakeSlot } from "./FurnitureMakeSlot";
import type { FurnitureMakeBeHelpedData } from "./FurnitureMakeBeHelpedData";

/**
 * CmdId: 4578
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface FurnitureMakeBeHelpedNotify {
  FurnitureMakeSlot?: FurnitureMakeSlot;
  FurnitureMakeHelpedData?: FurnitureMakeBeHelpedData;
}
