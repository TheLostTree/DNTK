/* eslint-disable */
import type { ForwardType } from "./ForwardType";
import type { EvtRushMoveInfo } from "./EvtRushMoveInfo";

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
