/* eslint-disable */
import type { RegionInfo } from "./RegionInfo";
import type { ForceUpdateInfo } from "./ForceUpdateInfo";
import type { StopServerInfo } from "./StopServerInfo";

export interface QueryCurrRegionHttpRsp {
  Retcode?: number;
  Msg?: string;
  RegionInfo?: RegionInfo;
  ClientSecretKey?: Buffer;
  RegionCustomConfigEncrypted?: Buffer;
  ClientRegionCustomConfigEncrypted?: Buffer;
  ForceUdpate?: ForceUpdateInfo | undefined;
  StopServer?: StopServerInfo | undefined;
}
