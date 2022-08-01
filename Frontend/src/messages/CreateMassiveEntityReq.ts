/* eslint-disable */
import type { ClientMassiveEntity } from "./ClientMassiveEntity";

/**
 * CmdId: 342
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface CreateMassiveEntityReq {
  MassiveEntityList?: ClientMassiveEntity[];
}
