/* eslint-disable */
import type { PlayerOfferingData } from "./PlayerOfferingData.d.ts";
import type { ItemParam } from "./ItemParam.d.ts";

/**
 * CmdId: 2917
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlayerOfferingRsp {
  ItemList?: ItemParam[];
  Retcode?: number;
  OfferingData?: PlayerOfferingData;
}
