/* eslint-disable */
export interface CityReputationRequestInfo {
  IsOpen?: boolean;
  RequestInfoList?: CityReputationRequestInfo_RequestInfo[];
}

export interface CityReputationRequestInfo_RequestInfo {
  RequestId?: number;
  QuestId?: number;
  IsTakenReward?: boolean;
}
