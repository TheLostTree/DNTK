/* eslint-disable */
import type { FurnitureMakeSlot } from "./FurnitureMakeSlot.d.ts";
import type { FurnitureMakeBeHelpedData } from "./FurnitureMakeBeHelpedData.d.ts";
import type { FurnitureMakeMakeInfo } from "./FurnitureMakeMakeInfo.d.ts";
import type { FurnitureMakeHelpData } from "./FurnitureMakeHelpData.d.ts";

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
