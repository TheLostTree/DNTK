/* eslint-disable */
import type { BargainSnapshot } from "./BargainSnapshot.d.ts";

/**
 * CmdId: 404
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface BargainStartNotify {
  BargainId?: number;
  Snapshot?: BargainSnapshot;
}
