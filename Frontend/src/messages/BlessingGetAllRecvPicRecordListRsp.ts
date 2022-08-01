/* eslint-disable */
import type { BlessingRecvPicRecord } from "./BlessingRecvPicRecord";

/**
 * CmdId: 2083
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface BlessingGetAllRecvPicRecordListRsp {
  RecvPicRecordList?: BlessingRecvPicRecord[];
  Retcode?: number;
}
