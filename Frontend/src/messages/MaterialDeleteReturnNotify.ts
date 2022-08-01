/* eslint-disable */
import type { MaterialDeleteReturnType } from "./MaterialDeleteReturnType.ts";

/**
 * CmdId: 661
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface MaterialDeleteReturnNotify {
  ReturnItemMap?: { [key: number]: number };
  Type?: MaterialDeleteReturnType;
  DeleteMaterialMap?: { [key: number]: number };
}

export interface MaterialDeleteReturnNotify_ReturnItemMapEntry {
  Key: number;
  Value: number;
}

export interface MaterialDeleteReturnNotify_DeleteMaterialMapEntry {
  Key: number;
  Value: number;
}
