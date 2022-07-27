/* eslint-disable */
import type { RegionInfo } from "./RegionInfo.d.ts";
import type { ForceUpdateInfo } from "./ForceUpdateInfo.d.ts";
import type { StopServerInfo } from "./StopServerInfo.d.ts";

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
