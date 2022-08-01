/* eslint-disable */
import type { OnlinePlayerInfo } from "./OnlinePlayerInfo.ts";

/**
 * CmdId: 47
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetOnlinePlayerInfoRsp {
  Retcode?: number;
  TargetUid?: number;
  Param?: number;
  TargetPlayerInfo?: OnlinePlayerInfo;
}
