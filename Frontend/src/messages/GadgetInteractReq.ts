/* eslint-disable */
import type { InterOpType } from "./InterOpType.ts";
import type { ResinCostType } from "./ResinCostType.ts";

/**
 * CmdId: 872
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface GadgetInteractReq {
  GadgetId?: number;
  IsUseCondenseResin?: boolean;
  OpType?: InterOpType;
  ResinCostType?: ResinCostType;
  Unk2700DCPBGMKCHGJ?: number;
  GadgetEntityId?: number;
}
