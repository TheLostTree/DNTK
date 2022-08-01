/* eslint-disable */
import type { ChannelerSlabBuffSchemeInfo } from "./ChannelerSlabBuffSchemeInfo.ts";
import type { ChannelerSlabAssistInfo } from "./ChannelerSlabAssistInfo.ts";

export interface ChannelerSlabBuffInfo {
  MpBuffSchemeInfo?: ChannelerSlabBuffSchemeInfo;
  BuffIdList?: number[];
  SingleBuffSchemeInfo?: ChannelerSlabBuffSchemeInfo;
  AssistInfoList?: ChannelerSlabAssistInfo[];
}
