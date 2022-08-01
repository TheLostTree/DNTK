/* eslint-disable */
import type { Vector } from "./Vector";
import type { ServantInfo } from "./ServantInfo";

export interface SceneEntityAiInfo {
  IsAiOpen?: boolean;
  BornPos?: Vector;
  SkillCdMap?: { [key: number]: number };
  ServantInfo?: ServantInfo;
  AiThreatMap?: { [key: number]: number };
  SkillGroupCdMap?: { [key: number]: number };
  CurTactic?: number;
}

export interface SceneEntityAiInfo_SkillCdMapEntry {
  Key: number;
  Value: number;
}

export interface SceneEntityAiInfo_AiThreatMapEntry {
  Key: number;
  Value: number;
}

export interface SceneEntityAiInfo_SkillGroupCdMapEntry {
  Key: number;
  Value: number;
}
