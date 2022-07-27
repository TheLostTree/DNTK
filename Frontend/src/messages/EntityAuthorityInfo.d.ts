/* eslint-disable */
import type { AbilitySyncStateInfo } from "./AbilitySyncStateInfo.d.ts";
import type { EntityRendererChangedInfo } from "./EntityRendererChangedInfo.d.ts";
import type { SceneEntityAiInfo } from "./SceneEntityAiInfo.d.ts";
import type { Vector } from "./Vector.d.ts";
import type { Unk2700HFMDKDHCJCM } from "./Unk2700_HFMDKDHCJCM.d.ts";
import type { AnimatorParameterValueInfoPair } from "./AnimatorParameterValueInfoPair.d.ts";

export interface EntityAuthorityInfo {
  AbilityInfo?: AbilitySyncStateInfo;
  RendererChangedInfo?: EntityRendererChangedInfo;
  AiInfo?: SceneEntityAiInfo;
  BornPos?: Vector;
  PoseParaList?: AnimatorParameterValueInfoPair[];
  Unk2700KDGMOPELHNE?: Unk2700HFMDKDHCJCM;
}
