/* eslint-disable */
import type { SvrMsgId } from "./SvrMsgId";
import type { MsgParam } from "./MsgParam";

/**
 * CmdId: 35
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ShowMessageNotify {
  MsgId?: SvrMsgId;
  Params?: MsgParam[];
}
