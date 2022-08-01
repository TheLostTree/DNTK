/* eslint-disable */
import type { FurnitureMakeSlot } from "./FurnitureMakeSlot";
import type { FurnitureMakeBeHelpedData } from "./FurnitureMakeBeHelpedData";
import type { FurnitureMakeMakeInfo } from "./FurnitureMakeMakeInfo";
import type { FurnitureMakeHelpData } from "./FurnitureMakeHelpData";

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
