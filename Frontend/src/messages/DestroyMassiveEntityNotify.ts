/* eslint-disable */
import type { ClientMassiveEntity } from "./ClientMassiveEntity.ts";

/**
 * CmdId: 358
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface DestroyMassiveEntityNotify {
  MassiveEntityList?: ClientMassiveEntity[];
}
