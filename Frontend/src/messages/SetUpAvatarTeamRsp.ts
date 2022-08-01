/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 1646
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface SetUpAvatarTeamRsp {
  AvatarTeamGuidList?: Long[];
  TeamId?: number;
  Retcode?: number;
  CurAvatarGuid?: Long;
}
