/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 666
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface SetEquipLockStateReq {
  IsLocked?: boolean;
  TargetEquipGuid?: Long;
}
