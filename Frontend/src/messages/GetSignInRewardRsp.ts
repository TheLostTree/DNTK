/* eslint-disable */
import type { SignInInfo } from "./SignInInfo.ts";

/**
 * CmdId: 2521
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetSignInRewardRsp {
  Retcode?: number;
  SignInInfo?: SignInInfo;
}
