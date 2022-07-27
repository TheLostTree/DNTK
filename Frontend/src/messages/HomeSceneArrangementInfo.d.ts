/* eslint-disable */
import type { Vector } from "./Vector.d.ts";
import type { HomeFurnitureData } from "./HomeFurnitureData.d.ts";
import type { HomeBlockArrangementInfo } from "./HomeBlockArrangementInfo.d.ts";

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
