/* eslint-disable */
import type { ForwardType } from "./ForwardType.d.ts";
import type { EvtRushMoveInfo } from "./EvtRushMoveInfo.d.ts";

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
