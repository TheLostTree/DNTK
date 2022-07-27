/* eslint-disable */
import type { SvrMsgId } from "./SvrMsgId.d.ts";
import type { MsgParam } from "./MsgParam.d.ts";

/**
 * CmdId: 35
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ShowMessageNotify {
  MsgId?: SvrMsgId;
  Params?: MsgParam[];
}
