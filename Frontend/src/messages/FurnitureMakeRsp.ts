/* eslint-disable */
import type { FurnitureMakeSlot } from "./FurnitureMakeSlot.ts";
import type { FurnitureMakeBeHelpedData } from "./FurnitureMakeBeHelpedData.ts";
import type { FurnitureMakeMakeInfo } from "./FurnitureMakeMakeInfo.ts";
import type { FurnitureMakeHelpData } from "./FurnitureMakeHelpData.ts";

/**
 * CmdId: 4782
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface FurnitureMakeRsp {
  HelpedDataList?: FurnitureMakeBeHelpedData[];
  MakeInfoList?: FurnitureMakeMakeInfo[];
  FurnitureMakeSlot?: FurnitureMakeSlot;
  Retcode?: number;
  HelpDataList?: FurnitureMakeHelpData[];
}
