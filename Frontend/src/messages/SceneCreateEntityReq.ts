/* eslint-disable */
import type { CreateEntityInfo } from "./CreateEntityInfo";
import type { CreateReason } from "./CreateReason";

/**
 * CmdId: 288
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface SceneCreateEntityReq {
  Entity?: CreateEntityInfo;
  IsDestroyWhenDisconnect?: boolean;
  Reason?: CreateReason;
}
