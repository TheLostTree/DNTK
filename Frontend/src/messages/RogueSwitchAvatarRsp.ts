/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 8915
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface RogueSwitchAvatarRsp {
  CurAvatarGuid?: Long;
  BackstageAvatarGuidList?: Long[];
  DungeonId?: number;
  CellId?: number;
  Retcode?: number;
  OnstageAvatarGuidList?: Long[];
}
