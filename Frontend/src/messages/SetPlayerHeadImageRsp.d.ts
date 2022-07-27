/* eslint-disable */
import type { ProfilePicture } from "./ProfilePicture.d.ts";

/**
 * CmdId: 4047
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface SetPlayerHeadImageRsp {
  ProfilePicture?: ProfilePicture;
  AvatarId?: number;
  Retcode?: number;
}
