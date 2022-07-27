/* eslint-disable */
export interface MaterialDeleteInfo {
  HasDeleteConfig?: boolean;
  CountDownDelete?: MaterialDeleteInfo_CountDownDelete | undefined;
  DateDelete?: MaterialDeleteInfo_DateTimeDelete | undefined;
  DelayWeekCountDownDelete?:
    | MaterialDeleteInfo_DelayWeekCountDownDelete
    | undefined;
}

export interface MaterialDeleteInfo_CountDownDelete {
  DeleteTimeNumMap?: { [key: number]: number };
  ConfigCountDownTime?: number;
}

export interface MaterialDeleteInfo_CountDownDelete_DeleteTimeNumMapEntry {
  Key: number;
  Value: number;
}

export interface MaterialDeleteInfo_DateTimeDelete {
  DeleteTime?: number;
}

export interface MaterialDeleteInfo_DelayWeekCountDownDelete {
  DeleteTimeNumMap?: { [key: number]: number };
  ConfigDelayWeek?: number;
  ConfigCountDownTime?: number;
}

export interface MaterialDeleteInfo_DelayWeekCountDownDelete_DeleteTimeNumMapEntry {
  Key: number;
  Value: number;
}
