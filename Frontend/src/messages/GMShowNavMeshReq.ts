/* eslint-disable */
import type { Vector } from "./Vector.ts";

/**
 * CmdId: 2357
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface GMShowNavMeshReq {
  Center?: Vector;
  Extent?: Vector;
}
