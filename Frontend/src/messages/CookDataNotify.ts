/* eslint-disable */
import type { CookRecipeData } from "./CookRecipeData.ts";

/**
 * CmdId: 195
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface CookDataNotify {
  RecipeDataList?: CookRecipeData[];
  Grade?: number;
}
