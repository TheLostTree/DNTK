/* eslint-disable */
/**
 * CmdId: 107
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface PlayerLogoutReq {
  Reason?: PlayerLogoutReq_Reason;
}

export enum PlayerLogoutReq_Reason {
  REASON_DISCONNECT = 0,
  REASON_CLIENT_REQ = 1,
  REASON_TIMEOUT = 2,
  REASON_ADMIN_REQ = 3,
  REASON_SERVER_CLOSE = 4,
  REASON_GM_CLEAR = 5,
  REASON_PLAYER_TRANSFER = 6,
  REASON_CLIENT_CHECKSUM_INVALID = 7,
  UNRECOGNIZED = -1,
}
