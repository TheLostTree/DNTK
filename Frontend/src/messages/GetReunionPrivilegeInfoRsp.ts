/* eslint-disable */
import type { ReunionPrivilegeInfo } from "./ReunionPrivilegeInfo";

/**
 * CmdId: 5087
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetReunionPrivilegeInfoRsp {
  Retcode?: number;
  PrivilegeInfo?: ReunionPrivilegeInfo;
}
