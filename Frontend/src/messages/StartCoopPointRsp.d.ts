/* eslint-disable */
import type { MainCoop } from "./MainCoop.d.ts";

/**
 * CmdId: 1964
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface StartCoopPointRsp {
  IsStart?: boolean;
  StartMainCoop?: MainCoop;
  CoopPoint?: number;
  Retcode?: number;
}
