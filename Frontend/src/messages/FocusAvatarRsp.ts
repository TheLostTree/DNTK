/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 1681
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface FocusAvatarRsp {
  Retcode?: number;
  IsFocus?: boolean;
  AvatarGuid?: Long;
}
