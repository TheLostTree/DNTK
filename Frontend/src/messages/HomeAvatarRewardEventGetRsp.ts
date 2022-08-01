/* eslint-disable */
import type { ItemParam } from "./ItemParam.ts";

/**
 * CmdId: 4833
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface HomeAvatarRewardEventGetRsp {
  ItemList?: ItemParam[];
  Retcode?: number;
  EventId?: number;
}
