/* eslint-disable */
import type { RegionSimpleInfo } from "./RegionSimpleInfo.ts";

export interface QueryRegionListHttpRsp {
  Retcode?: number;
  RegionList?: RegionSimpleInfo[];
  ClientSecretKey?: Buffer;
  ClientCustomConfigEncrypted?: Buffer;
  EnableLoginPc?: boolean;
}
