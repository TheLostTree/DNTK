/* eslint-disable */
import type { Vector } from "./Vector.d.ts";
import type { CylinderRegionSize } from "./CylinderRegionSize.d.ts";
import type { PolygonRegionSize } from "./PolygonRegionSize.d.ts";

/**
 * CmdId: 3051
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlayerEyePointStateNotify {
  RegionEntityId?: number;
  EyePointPos?: Vector;
  IsUseEyePoint?: boolean;
  RegionConfigId?: number;
  RegionShape?: number;
  IsFilterStreamPos?: boolean;
  Unk2800GBBMMIGJFCF?: number;
  RegionGroupId?: number;
  SphereRadius?: number | undefined;
  CubicSize?: Vector | undefined;
  CylinderSize?: CylinderRegionSize | undefined;
  PolygonSize?: PolygonRegionSize | undefined;
}
