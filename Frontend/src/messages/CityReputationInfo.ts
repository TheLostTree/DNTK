/* eslint-disable */
import type { CityReputationHuntInfo } from "./CityReputationHuntInfo.ts";
import type { CityReputationRequestInfo } from "./CityReputationRequestInfo.ts";
import type { CityReputationQuestInfo } from "./CityReputationQuestInfo.ts";
import type { CityReputationExploreInfo } from "./CityReputationExploreInfo.ts";

export interface CityReputationInfo {
  Level?: number;
  NextRefreshTime?: number;
  HuntInfo?: CityReputationHuntInfo;
  TakenLevelRewardList?: number[];
  TotalAcceptRequestNum?: number;
  RequestInfo?: CityReputationRequestInfo;
  QuestInfo?: CityReputationQuestInfo;
  Exp?: number;
  ExploreInfo?: CityReputationExploreInfo;
}
