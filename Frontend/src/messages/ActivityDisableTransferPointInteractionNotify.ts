/* eslint-disable */
import type { Uint32Pair } from "./Uint32Pair.ts";

/**
 * CmdId: 8982
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ActivityDisableTransferPointInteractionNotify {
  IsDisable?: boolean;
  ScenePointPair?: Uint32Pair;
}
