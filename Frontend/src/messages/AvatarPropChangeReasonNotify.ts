/* eslint-disable */
import type { PropChangeReason } from "./PropChangeReason";
import type Long from "long";

/**
 * CmdId: 1273
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface AvatarPropChangeReasonNotify {
  OldValue?: number;
  Reason?: PropChangeReason;
  PropType?: number;
  AvatarGuid?: Long;
  CurValue?: number;
}
