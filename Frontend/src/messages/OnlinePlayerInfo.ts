/* eslint-disable */
import type { MpSettingType } from "./MpSettingType";
import type { ProfilePicture } from "./ProfilePicture";

export interface OnlinePlayerInfo {
  Uid?: number;
  Nickname?: string;
  PlayerLevel?: number;
  AvatarId?: number;
  MpSettingType?: MpSettingType;
  CurPlayerNumInWorld?: number;
  WorldLevel?: number;
  OnlineId?: string;
  NameCardId?: number;
  BlacklistUidList?: number[];
  Signature?: string;
  ProfilePicture?: ProfilePicture;
  PsnId?: string;
}
