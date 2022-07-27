/* eslint-disable */
import type { HomeVerifyBlockData } from "./HomeVerifyBlockData.d.ts";

export interface HomeVerifySceneData {
  Blocks?: HomeVerifyBlockData[];
  ModuleId?: number;
  SceneId?: number;
  Version?: number;
  IsRoom?: number;
}
