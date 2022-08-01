/* eslint-disable */
import type { HomeAnimalData } from "./HomeAnimalData.ts";
import type { Unk2700GOHMLAFNBGF } from "./Unk2700_GOHMLAFNBGF.ts";
import type { WeekendDjinnInfo } from "./WeekendDjinnInfo.ts";
import type { HomeFurnitureSuiteData } from "./HomeFurnitureSuiteData.ts";
import type { HomeBlockFieldData } from "./HomeBlockFieldData.ts";
import type { HomeNpcData } from "./HomeNpcData.ts";
import type { HomeBlockDotPattern } from "./HomeBlockDotPattern.ts";
import type { HomeFurnitureData } from "./HomeFurnitureData.ts";
import type { Unk2700BIEMCDLIFOD } from "./Unk2700_BIEMCDLIFOD.ts";

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
