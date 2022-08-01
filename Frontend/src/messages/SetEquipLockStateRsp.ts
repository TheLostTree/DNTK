/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 668
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface SetEquipLockStateRsp {
  TargetEquipGuid?: Long;
  Retcode?: number;
  IsLocked?: boolean;
}
