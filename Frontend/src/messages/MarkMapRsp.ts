/* eslint-disable */
import type { MapMarkPoint } from "./MapMarkPoint";

/**
 * CmdId: 3079
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface MarkMapRsp {
  MarkList?: MapMarkPoint[];
  Retcode?: number;
}
