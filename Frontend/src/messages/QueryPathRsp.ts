/* eslint-disable */
import type { Vector } from "./Vector.ts";

/**
 * CmdId: 2398
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface QueryPathRsp {
  QueryId?: number;
  Corners?: Vector[];
  QueryStatus?: QueryPathRsp_PathStatusType;
  Retcode?: number;
}

export enum QueryPathRsp_PathStatusType {
  PATH_STATUS_TYPE_FAIL = 0,
  PATH_STATUS_TYPE_SUCC = 1,
  PATH_STATUS_TYPE_PARTIAL = 2,
  UNRECOGNIZED = -1,
}
