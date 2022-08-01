/* eslint-disable */
import type { ReunionSignInInfo } from "./ReunionSignInInfo.ts";

/**
 * CmdId: 5072
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface TakeReunionSignInRewardRsp {
  SignInInfo?: ReunionSignInInfo;
  Retcode?: number;
}
