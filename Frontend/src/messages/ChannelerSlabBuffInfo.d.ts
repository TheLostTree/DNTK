/* eslint-disable */
import type { ChannelerSlabBuffSchemeInfo } from "./ChannelerSlabBuffSchemeInfo.d.ts";
import type { ChannelerSlabAssistInfo } from "./ChannelerSlabAssistInfo.d.ts";

export interface ChannelerSlabBuffInfo {
  MpBuffSchemeInfo?: ChannelerSlabBuffSchemeInfo;
  BuffIdList?: number[];
  SingleBuffSchemeInfo?: ChannelerSlabBuffSchemeInfo;
  AssistInfoList?: ChannelerSlabAssistInfo[];
}
