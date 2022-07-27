/* eslint-disable */
import type { PropChangeReason } from "./PropChangeReason.d.ts";

/**
 * CmdId: 1299
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlayerPropChangeReasonNotify {
  PropType?: number;
  OldValue?: number;
  Reason?: PropChangeReason;
  CurValue?: number;
}
