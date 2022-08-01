/* eslint-disable */
export interface BlessingActivityDetailInfo {
  CurDayScanType?: number;
  IsContentClosed?: boolean;
  PicNumMap?: { [key: number]: number };
  ContentCloseTime?: number;
  CurDayScanNum?: number;
  RedeemRewardNum?: number;
  IsActivated?: boolean;
  NextRefreshTime?: number;
}

export interface BlessingActivityDetailInfo_PicNumMapEntry {
  Key: number;
  Value: number;
}
