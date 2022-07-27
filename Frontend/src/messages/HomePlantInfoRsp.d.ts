/* eslint-disable */
import type { HomePlantFieldData } from "./HomePlantFieldData.d.ts";

/**
 * CmdId: 4701
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface HomePlantInfoRsp {
  Retcode?: number;
  FieldList?: HomePlantFieldData[];
}
