/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 1683
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface AvatarPromoteGetRewardRsp {
  Retcode?: number;
  RewardId?: number;
  AvatarGuid?: Long;
  PromoteLevel?: number;
}
