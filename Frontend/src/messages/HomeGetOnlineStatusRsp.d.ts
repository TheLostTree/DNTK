/* eslint-disable */
import type { OnlinePlayerInfo } from "./OnlinePlayerInfo.d.ts";

/**
 * CmdId: 4705
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface HomeGetOnlineStatusRsp {
  PlayerInfoList?: OnlinePlayerInfo[];
  Retcode?: number;
}
