/* eslint-disable */
import type { RegionSimpleInfo } from "./RegionSimpleInfo";

export interface QueryRegionListHttpRsp {
  Retcode?: number;
  RegionList?: RegionSimpleInfo[];
  ClientSecretKey?: Buffer;
  ClientCustomConfigEncrypted?: Buffer;
  EnableLoginPc?: boolean;
}
