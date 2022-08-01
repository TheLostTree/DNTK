/* eslint-disable */
import type { ChangeHpReason } from "./ChangeHpReason.ts";
import type { PropChangeReason } from "./PropChangeReason.ts";
import type { ChangeEnergyReason } from "./ChangeEnergyReason.ts";

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
