/* eslint-disable */
import type { ForwardType } from "./ForwardType";
import type { EntityRendererChangedInfo } from "./EntityRendererChangedInfo";

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
