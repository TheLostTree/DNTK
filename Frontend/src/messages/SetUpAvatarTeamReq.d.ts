/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 1690
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface SetUpAvatarTeamReq {
  TeamId?: number;
  AvatarTeamGuidList?: Long[];
  CurAvatarGuid?: Long;
}
