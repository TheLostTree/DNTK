/* eslint-disable */
import type { AbilitySyncStateInfo } from "./AbilitySyncStateInfo";
import type { EntityRendererChangedInfo } from "./EntityRendererChangedInfo";
import type { SceneEntityAiInfo } from "./SceneEntityAiInfo";
import type { Vector } from "./Vector";
import type { Unk2700HFMDKDHCJCM } from "./Unk2700_HFMDKDHCJCM";
import type { AnimatorParameterValueInfoPair } from "./AnimatorParameterValueInfoPair";

export interface EntityAuthorityInfo {
  AbilityInfo?: AbilitySyncStateInfo;
  RendererChangedInfo?: EntityRendererChangedInfo;
  AiInfo?: SceneEntityAiInfo;
  BornPos?: Vector;
  PoseParaList?: AnimatorParameterValueInfoPair[];
  Unk2700KDGMOPELHNE?: Unk2700HFMDKDHCJCM;
}
