/* eslint-disable */
import type { ChangeHpReason } from "./ChangeHpReason";
import type { PropChangeReason } from "./PropChangeReason";
import type { ChangeEnergyReason } from "./ChangeEnergyReason";

/**
 * CmdId: 1203
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface EntityFightPropChangeReasonNotify {
  ParamList?: number[];
  PropDelta?: number;
  ChangeHpReason?: ChangeHpReason;
  Reason?: PropChangeReason;
  EntityId?: number;
  ChangeEnergyReson?: ChangeEnergyReason;
  PropType?: number;
}
