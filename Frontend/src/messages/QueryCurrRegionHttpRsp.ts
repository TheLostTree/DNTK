/* eslint-disable */
import type { RegionInfo } from "./RegionInfo.ts";
import type { ForceUpdateInfo } from "./ForceUpdateInfo.ts";
import type { StopServerInfo } from "./StopServerInfo.ts";

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
