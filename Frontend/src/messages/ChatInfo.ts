/* eslint-disable */
export interface ChatInfo {
  Time?: number;
  Sequence?: number;
  ToUid?: number;
  Uid?: number;
  IsRead?: boolean;
  Text?: string | undefined;
  Icon?: number | undefined;
  SystemHint?: ChatInfo_SystemHint | undefined;
}

export enum ChatInfo_SystemHintType {
  SYSTEM_HINT_TYPE_CHAT_NONE = 0,
  SYSTEM_HINT_TYPE_CHAT_ENTER_WORLD = 1,
  SYSTEM_HINT_TYPE_CHAT_LEAVE_WORLD = 2,
  UNRECOGNIZED = -1,
}

export interface ChatInfo_SystemHint {
  Type?: number;
}
