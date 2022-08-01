/* eslint-disable */
import type { ForwardType } from "./ForwardType.ts";

/**
 * CmdId: 374
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface AnimatorForceSetAirMoveNotify {
  EntityId?: number;
  InAirMove?: boolean;
  ForwardType?: ForwardType;
}
