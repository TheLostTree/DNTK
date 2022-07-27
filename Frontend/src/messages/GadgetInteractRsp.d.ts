/* eslint-disable */
import type { InteractType } from "./InteractType.d.ts";
import type { InterOpType } from "./InterOpType.d.ts";

/**
 * CmdId: 898
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GadgetInteractRsp {
  GadgetEntityId?: number;
  InteractType?: InteractType;
  OpType?: InterOpType;
  Retcode?: number;
  GadgetId?: number;
}
