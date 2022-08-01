/* eslint-disable */
import type { HomeAnimalData } from "./HomeAnimalData";
import type { Unk2700GOHMLAFNBGF } from "./Unk2700_GOHMLAFNBGF";
import type { WeekendDjinnInfo } from "./WeekendDjinnInfo";
import type { HomeFurnitureSuiteData } from "./HomeFurnitureSuiteData";
import type { HomeBlockFieldData } from "./HomeBlockFieldData";
import type { HomeNpcData } from "./HomeNpcData";
import type { HomeBlockDotPattern } from "./HomeBlockDotPattern";
import type { HomeFurnitureData } from "./HomeFurnitureData";
import type { Unk2700BIEMCDLIFOD } from "./Unk2700_BIEMCDLIFOD";

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
