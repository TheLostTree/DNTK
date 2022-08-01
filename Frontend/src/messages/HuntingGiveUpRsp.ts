/* eslint-disable */
import type { HuntingPair } from "./HuntingPair.ts";

/**
 * CmdId: 4342
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface HuntingGiveUpRsp {
  Retcode?: number;
  HuntingPair?: HuntingPair;
}
