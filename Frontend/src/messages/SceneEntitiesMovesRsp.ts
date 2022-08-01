/* eslint-disable */
import type { EntityMoveFailInfo } from "./EntityMoveFailInfo.ts";

/**
 * CmdId: 255
 * EnetChannelId: 1
 * EnetIsReliable: false
 */
export interface SceneEntitiesMovesRsp {
  EntityMoveFailInfoList?: EntityMoveFailInfo[];
}
