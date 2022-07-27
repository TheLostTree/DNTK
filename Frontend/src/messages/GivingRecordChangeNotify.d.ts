/* eslint-disable */
import type { GivingRecord } from "./GivingRecord.d.ts";

/**
 * CmdId: 187
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GivingRecordChangeNotify {
  IsDeactive?: boolean;
  GivingRecord?: GivingRecord;
}
