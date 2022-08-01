/* eslint-disable */
import type { InteractType } from "./InteractType";
import type { InterOpType } from "./InterOpType";

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
