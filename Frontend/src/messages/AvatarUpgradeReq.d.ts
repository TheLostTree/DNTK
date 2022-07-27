/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 1770
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface AvatarUpgradeReq {
  AvatarGuid?: Long;
  Count?: number;
  ItemId?: number;
}
