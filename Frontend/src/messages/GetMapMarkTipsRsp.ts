/* eslint-disable */
import type { MapMarkTipsInfo } from "./MapMarkTipsInfo";

/**
 * CmdId: 3327
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetMapMarkTipsRsp {
  Retcode?: number;
  MarkTipsList?: MapMarkTipsInfo[];
}
