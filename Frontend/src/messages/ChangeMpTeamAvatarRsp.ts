/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 1753
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ChangeMpTeamAvatarRsp {
  Retcode?: number;
  AvatarGuidList?: Long[];
  CurAvatarGuid?: Long;
}
