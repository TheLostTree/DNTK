/* eslint-disable */
import type Long from "long";
import type { HomeLimitedShopInfo } from "./HomeLimitedShopInfo";

export interface HomeBasicInfo {
  Level?: number;
  CurRoomSceneId?: number;
  CurModuleId?: number;
  IsInEditMode?: boolean;
  HomeOwnerUid?: number;
  Exp?: Long;
  LimitedShopInfo?: HomeLimitedShopInfo;
  OwnerNickName?: string;
}
