/* eslint-disable */
import type { ResVersionConfig } from "./ResVersionConfig.ts";

/**
 * CmdId: 120
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetNextResourceInfoRsp {
  NextResourceUrl?: string;
  NextResVersionConfig?: ResVersionConfig;
  Retcode?: number;
}
