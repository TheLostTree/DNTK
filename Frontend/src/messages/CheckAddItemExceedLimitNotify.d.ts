/* eslint-disable */
/**
 * CmdId: 692
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface CheckAddItemExceedLimitNotify {
  IsDrop?: boolean;
  ExceededItemTypeList?: number[];
  ExceededItemList?: number[];
  MsgType?: CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType;
}

export enum CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType {
  ITEM_EXCEED_LIMIT_MSG_TYPE_DEFAULT = 0,
  ITEM_EXCEED_LIMIT_MSG_TYPE_TEXT = 1,
  ITEM_EXCEED_LIMIT_MSG_TYPE_DIALOG = 2,
  ITEM_EXCEED_LIMIT_MSG_TYPE_Unk2700_BONLGEEEBBF = 3,
  UNRECOGNIZED = -1,
}
