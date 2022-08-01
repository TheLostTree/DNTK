/* eslint-disable */
import type { AbilitySyncStateInfo } from "./AbilitySyncStateInfo.ts";
import type { EntityRendererChangedInfo } from "./EntityRendererChangedInfo.ts";
import type { SceneEntityAiInfo } from "./SceneEntityAiInfo.ts";
import type { Vector } from "./Vector.ts";
import type { Unk2700HFMDKDHCJCM } from "./Unk2700_HFMDKDHCJCM.ts";
import type { AnimatorParameterValueInfoPair } from "./AnimatorParameterValueInfoPair.ts";

export interface EntityAuthorityInfo {
  AbilityInfo?: AbilitySyncStateInfo;
  RendererChangedInfo?: EntityRendererChangedInfo;
  AiInfo?: SceneEntityAiInfo;
  BornPos?: Vector;
  PoseParaList?: AnimatorParameterValueInfoPair[];
  Unk2700KDGMOPELHNE?: Unk2700HFMDKDHCJCM;
}
