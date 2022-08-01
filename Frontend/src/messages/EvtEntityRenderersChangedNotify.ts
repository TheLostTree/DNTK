/* eslint-disable */
import type { ForwardType } from "./ForwardType.ts";
import type { EntityRendererChangedInfo } from "./EntityRendererChangedInfo.ts";

/**
 * CmdId: 343
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface EvtEntityRenderersChangedNotify {
  ForwardType?: ForwardType;
  IsServerCache?: boolean;
  RendererChangedInfo?: EntityRendererChangedInfo;
  EntityId?: number;
}
