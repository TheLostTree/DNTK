/* eslint-disable */
import type { InteractType } from "./InteractType.ts";
import type { InterOpType } from "./InterOpType.ts";

/**
 * CmdId: 5222
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface MiracleRingDeliverItemRsp {
  InteractType?: InteractType;
  Retcode?: number;
  OpType?: InterOpType;
  GadgetId?: number;
  GadgetEntityId?: number;
}
