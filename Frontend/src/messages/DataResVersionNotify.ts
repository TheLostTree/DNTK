/* eslint-disable */
import type { ResVersionConfig } from "./ResVersionConfig";

/**
 * CmdId: 167
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface DataResVersionNotify {
  ClientSilenceMd5?: string;
  ClientSilenceVersionSuffix?: string;
  ResVersionConfig?: ResVersionConfig;
  IsDataNeedRelogin?: boolean;
  OpType?: DataResVersionNotify_DataResVersionOpType;
  ClientDataVersion?: number;
  ClientVersionSuffix?: string;
  ClientSilenceDataVersion?: number;
  ClientMd5?: string;
}

export enum DataResVersionNotify_DataResVersionOpType {
  DATA_RES_VERSION_OP_TYPE_NONE = 0,
  DATA_RES_VERSION_OP_TYPE_RELOGIN = 1,
  DATA_RES_VERSION_OP_TYPE_MP_RELOGIN = 2,
  UNRECOGNIZED = -1,
}
