/* eslint-disable */
import type { MapMarkPoint } from "./MapMarkPoint";

/**
 * CmdId: 3466
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface MarkMapReq {
  Mark?: MapMarkPoint;
  Old?: MapMarkPoint;
  Op?: MarkMapReq_Operation;
}

export enum MarkMapReq_Operation {
  OPERATION_ADD = 0,
  OPERATION_MOD = 1,
  OPERATION_DEL = 2,
  OPERATION_GET = 3,
  UNRECOGNIZED = -1,
}
