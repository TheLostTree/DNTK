/* eslint-disable */
import type { CityReputationHuntInfo } from "./CityReputationHuntInfo";
import type { CityReputationRequestInfo } from "./CityReputationRequestInfo";
import type { CityReputationQuestInfo } from "./CityReputationQuestInfo";
import type { CityReputationExploreInfo } from "./CityReputationExploreInfo";

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
