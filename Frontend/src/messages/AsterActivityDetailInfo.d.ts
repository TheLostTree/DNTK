/* eslint-disable */
import type { AsterLittleDetailInfo } from "./AsterLittleDetailInfo.d.ts";
import type { AsterLargeDetailInfo } from "./AsterLargeDetailInfo.d.ts";
import type { AsterMidDetailInfo } from "./AsterMidDetailInfo.d.ts";
import type { AsterProgressDetailInfo } from "./AsterProgressDetailInfo.d.ts";

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
