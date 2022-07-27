/* eslint-disable */
import type { ChangeHpReason } from "./ChangeHpReason.d.ts";
import type { PropChangeReason } from "./PropChangeReason.d.ts";
import type { ChangeEnergyReason } from "./ChangeEnergyReason.d.ts";

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
