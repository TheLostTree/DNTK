/* eslint-disable */
import type { ForwardType } from "./ForwardType.d.ts";
import type { EntityRendererChangedInfo } from "./EntityRendererChangedInfo.d.ts";

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
