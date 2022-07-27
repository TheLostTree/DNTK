/* eslint-disable */
import type { RegionSimpleInfo } from "./RegionSimpleInfo.d.ts";

export interface QueryRegionListHttpRsp {
  Retcode?: number;
  RegionList?: RegionSimpleInfo[];
  ClientSecretKey?: Buffer;
  ClientCustomConfigEncrypted?: Buffer;
  EnableLoginPc?: boolean;
}
