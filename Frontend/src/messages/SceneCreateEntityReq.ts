/* eslint-disable */
import type { CreateEntityInfo } from "./CreateEntityInfo.ts";
import type { CreateReason } from "./CreateReason.ts";

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
