/* eslint-disable */
import type Long from "long";
import type { ServerBuff } from "./ServerBuff.d.ts";

/**
 * CmdId: 361
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ServerBuffChangeNotify {
  ServerBuffChangeType?: ServerBuffChangeNotify_ServerBuffChangeType;
  IsCreatureBuff?: boolean;
  EntityIdList?: number[];
  AvatarGuidList?: Long[];
  ServerBuffList?: ServerBuff[];
}

export enum ServerBuffChangeNotify_ServerBuffChangeType {
  SERVER_BUFF_CHANGE_TYPE_ADD_SERVER_BUFF = 0,
  SERVER_BUFF_CHANGE_TYPE_DEL_SERVER_BUFF = 1,
  UNRECOGNIZED = -1,
}
