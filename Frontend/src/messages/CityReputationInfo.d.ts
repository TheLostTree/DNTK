/* eslint-disable */
import type { CityReputationHuntInfo } from "./CityReputationHuntInfo.d.ts";
import type { CityReputationRequestInfo } from "./CityReputationRequestInfo.d.ts";
import type { CityReputationQuestInfo } from "./CityReputationQuestInfo.d.ts";
import type { CityReputationExploreInfo } from "./CityReputationExploreInfo.d.ts";

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
