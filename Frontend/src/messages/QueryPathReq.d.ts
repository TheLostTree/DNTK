/* eslint-disable */
import type { Vector3Int } from "./Vector3Int.d.ts";
import type { Vector } from "./Vector.d.ts";
import type { QueryFilter } from "./QueryFilter.d.ts";

/**
 * CmdId: 2372
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface QueryPathReq {
  QueryType?: QueryPathReq_OptionType;
  SourceExtend?: Vector3Int;
  SourcePos?: Vector;
  Filter?: QueryFilter;
  QueryId?: number;
  DestinationExtend?: Vector3Int;
  DestinationPos?: Vector[];
  SceneId?: number;
}

export enum QueryPathReq_OptionType {
  OPTION_TYPE_NONE = 0,
  OPTION_TYPE_NORMAL = 1,
  OPTION_TYPE_FIRST_CAN_GO = 2,
  UNRECOGNIZED = -1,
}
