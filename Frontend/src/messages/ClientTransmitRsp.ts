/* eslint-disable */
import type { TransmitReason } from "./TransmitReason";

/**
 * CmdId: 224
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ClientTransmitRsp {
  Reason?: TransmitReason;
  Retcode?: number;
}
