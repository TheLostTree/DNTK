/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 8201
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface RogueSwitchAvatarReq {
  CellId?: number;
  OnstageAvatarGuidList?: Long[];
  CurAvatarGuid?: Long;
  DungeonId?: number;
}
