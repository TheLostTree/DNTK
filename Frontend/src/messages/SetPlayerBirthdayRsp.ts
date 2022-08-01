/* eslint-disable */
import type { Birthday } from "./Birthday.ts";

/**
 * CmdId: 4097
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface SetPlayerBirthdayRsp {
  Birthday?: Birthday;
  Retcode?: number;
}
