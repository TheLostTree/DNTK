/* eslint-disable */
import type { HomeCustomFurnitureInfo } from "./HomeCustomFurnitureInfo.ts";

/**
 * CmdId: 4496
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface HomeEditCustomFurnitureRsp {
  CustomFurnitureInfo?: HomeCustomFurnitureInfo;
  Retcode?: number;
}
