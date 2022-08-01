/* eslint-disable */
import type { ForwardType } from "./ForwardType.ts";
import type { EvtRushMoveInfo } from "./EvtRushMoveInfo.ts";

/**
 * CmdId: 375
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface EvtRushMoveNotify {
  ForwardType?: ForwardType;
  EvtRushMoveInfo?: EvtRushMoveInfo;
}
