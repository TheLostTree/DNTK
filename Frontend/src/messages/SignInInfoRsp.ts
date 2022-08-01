/* eslint-disable */
import type { SignInInfo } from "./SignInInfo.ts";

/**
 * CmdId: 2535
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface SignInInfoRsp {
  SignInInfoList?: SignInInfo[];
  Retcode?: number;
}
