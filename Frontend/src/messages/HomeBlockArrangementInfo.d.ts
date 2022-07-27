/* eslint-disable */
import type { HomeAnimalData } from "./HomeAnimalData.d.ts";
import type { Unk2700GOHMLAFNBGF } from "./Unk2700_GOHMLAFNBGF.d.ts";
import type { WeekendDjinnInfo } from "./WeekendDjinnInfo.d.ts";
import type { HomeFurnitureSuiteData } from "./HomeFurnitureSuiteData.d.ts";
import type { HomeBlockFieldData } from "./HomeBlockFieldData.d.ts";
import type { HomeNpcData } from "./HomeNpcData.d.ts";
import type { HomeBlockDotPattern } from "./HomeBlockDotPattern.d.ts";
import type { HomeFurnitureData } from "./HomeFurnitureData.d.ts";
import type { Unk2700BIEMCDLIFOD } from "./Unk2700_BIEMCDLIFOD.d.ts";

export interface HomeBlockArrangementInfo {
  IsUnlocked?: boolean;
  ComfortValue?: number;
  DeployAnimalList?: HomeAnimalData[];
  Unk2700HGIECHILOJL?: Unk2700GOHMLAFNBGF[];
  WeekendDjinnInfoList?: WeekendDjinnInfo[];
  FurnitureSuiteList?: HomeFurnitureSuiteData[];
  FieldList?: HomeBlockFieldData[];
  DeployNpcList?: HomeNpcData[];
  DotPatternList?: HomeBlockDotPattern[];
  PersistentFurnitureList?: HomeFurnitureData[];
  DeployFurniureList?: HomeFurnitureData[];
  BlockId?: number;
  Unk2700KJGLLEEHBPF?: Unk2700BIEMCDLIFOD[];
}
