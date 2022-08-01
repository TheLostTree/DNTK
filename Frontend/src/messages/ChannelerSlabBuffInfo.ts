/* eslint-disable */
import type { ChannelerSlabBuffSchemeInfo } from "./ChannelerSlabBuffSchemeInfo";
import type { ChannelerSlabAssistInfo } from "./ChannelerSlabAssistInfo";

export interface ChannelerSlabBuffInfo {
  MpBuffSchemeInfo?: ChannelerSlabBuffSchemeInfo;
  BuffIdList?: number[];
  SingleBuffSchemeInfo?: ChannelerSlabBuffSchemeInfo;
  AssistInfoList?: ChannelerSlabAssistInfo[];
}
