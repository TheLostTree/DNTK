/* eslint-disable */
import type { CookRecipeData } from "./CookRecipeData.d.ts";
import type { ItemParam } from "./ItemParam.d.ts";

/**
 * CmdId: 188
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlayerCookRsp {
  ExtralItemList?: ItemParam[];
  CookCount?: number;
  ItemList?: ItemParam[];
  Retcode?: number;
  QteQuality?: number;
  RecipeData?: CookRecipeData;
}
