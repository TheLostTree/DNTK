/* eslint-disable */
import type Long from "long";
import type { MassiveWaterInfo } from "./MassiveWaterInfo";
import type { MassiveGrassInfo } from "./MassiveGrassInfo";
import type { MassiveBoxInfo } from "./MassiveBoxInfo";

export interface ClientMassiveEntity {
  EntityType?: number;
  ConfigId?: number;
  ObjId?: Long;
  WaterInfo?: MassiveWaterInfo | undefined;
  GrassInfo?: MassiveGrassInfo | undefined;
  BoxInfo?: MassiveBoxInfo | undefined;
}
