/* eslint-disable */
import type { CreateEntityInfo } from "./CreateEntityInfo.d.ts";
import type { CreateReason } from "./CreateReason.d.ts";

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
