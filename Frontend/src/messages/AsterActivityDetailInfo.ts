/* eslint-disable */
import type { AsterLittleDetailInfo } from "./AsterLittleDetailInfo";
import type { AsterLargeDetailInfo } from "./AsterLargeDetailInfo";
import type { AsterMidDetailInfo } from "./AsterMidDetailInfo";
import type { AsterProgressDetailInfo } from "./AsterProgressDetailInfo";

export interface AsterActivityDetailInfo {
  AsterLittle?: AsterLittleDetailInfo;
  AsterCredit?: number;
  AsterLarge?: AsterLargeDetailInfo;
  IsSpecialRewardTaken?: boolean;
  IsContentClosed?: boolean;
  ContentCloseTime?: number;
  AsterToken?: number;
  AsterMid?: AsterMidDetailInfo;
  AsterProgress?: AsterProgressDetailInfo;
}
