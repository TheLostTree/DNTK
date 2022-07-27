/* eslint-disable */
import type { BargainSnapshot } from "./BargainSnapshot.d.ts";

/**
 * CmdId: 495
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetAllActivatedBargainDataRsp {
  SnapshotList?: BargainSnapshot[];
  Retcode?: number;
}
