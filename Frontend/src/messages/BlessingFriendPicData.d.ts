/* eslint-disable */
import type { ProfilePicture } from "./ProfilePicture.d.ts";

export interface BlessingFriendPicData {
  PicNumMap?: { [key: number]: number };
  AvatarId?: number;
  RemarkName?: string;
  Nickname?: string;
  Signature?: string;
  ProfilePicture?: ProfilePicture;
  Uid?: number;
}

export interface BlessingFriendPicData_PicNumMapEntry {
  Key: number;
  Value: number;
}
