/* eslint-disable */
import type Long from "long";
import type { MassiveWaterInfo } from "./MassiveWaterInfo.ts";
import type { MassiveGrassInfo } from "./MassiveGrassInfo.ts";
import type { MassiveBoxInfo } from "./MassiveBoxInfo.ts";

export interface ClientMassiveEntity {
  EntityType?: number;
  ConfigId?: number;
  ObjId?: Long;
  WaterInfo?: MassiveWaterInfo | undefined;
  GrassInfo?: MassiveGrassInfo | undefined;
  BoxInfo?: MassiveBoxInfo | undefined;
}
