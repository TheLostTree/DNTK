/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 1708
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface ChangeMpTeamAvatarReq {
  CurAvatarGuid?: Long;
  AvatarGuidList?: Long[];
}
