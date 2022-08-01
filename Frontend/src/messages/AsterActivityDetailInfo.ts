/* eslint-disable */
import type { AsterLittleDetailInfo } from "./AsterLittleDetailInfo.ts";
import type { AsterLargeDetailInfo } from "./AsterLargeDetailInfo.ts";
import type { AsterMidDetailInfo } from "./AsterMidDetailInfo.ts";
import type { AsterProgressDetailInfo } from "./AsterProgressDetailInfo.ts";

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
