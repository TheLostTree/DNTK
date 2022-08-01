/* eslint-disable */
import type Long from "long";
import type { AvatarEquipAffixInfo } from "./AvatarEquipAffixInfo.ts";

/**
 * CmdId: 1662
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface AvatarEquipAffixStartNotify {
  AvatarGuid?: Long;
  EquipAffixInfo?: AvatarEquipAffixInfo;
}
