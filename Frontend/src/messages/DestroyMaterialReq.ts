/* eslint-disable */
import type { MaterialInfo } from "./MaterialInfo.ts";

/**
 * CmdId: 640
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface DestroyMaterialReq {
  MaterialList?: MaterialInfo[];
}
