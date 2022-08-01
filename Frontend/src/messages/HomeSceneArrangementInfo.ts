/* eslint-disable */
import type { Vector } from "./Vector.ts";
import type { HomeFurnitureData } from "./HomeFurnitureData.ts";
import type { HomeBlockArrangementInfo } from "./HomeBlockArrangementInfo.ts";

export interface HomeSceneArrangementInfo {
  BornRot?: Vector;
  BornPos?: Vector;
  StairList?: HomeFurnitureData[];
  DoorList?: HomeFurnitureData[];
  IsSetBornPos?: boolean;
  BlockArrangementInfoList?: HomeBlockArrangementInfo[];
  SceneId?: number;
  Unk2700BJHAMKKECEI?: number;
  DjinnPos?: Vector;
  MainHouse?: HomeFurnitureData;
  ComfortValue?: number;
  TmpVersion?: number;
}
