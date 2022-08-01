/* eslint-disable */
import type { PropValue } from "./PropValue";

/**
 * CmdId: 3308
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface WorldDataNotify {
  WorldPropMap?: { [key: number]: PropValue };
}

export enum WorldDataNotify_DataType {
  DATA_TYPE_NONE = 0,
  DATA_TYPE_WORLD_LEVEL = 1,
  DATA_TYPE_IS_IN_MP_MODE = 2,
  UNRECOGNIZED = -1,
}

export interface WorldDataNotify_WorldPropMapEntry {
  Key: number;
  Value?: PropValue;
}
