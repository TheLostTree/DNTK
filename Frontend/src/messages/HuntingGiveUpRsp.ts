/* eslint-disable */
import type { HuntingPair } from "./HuntingPair";

/**
 * CmdId: 4342
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface HuntingGiveUpRsp {
  Retcode?: number;
  HuntingPair?: HuntingPair;
}
