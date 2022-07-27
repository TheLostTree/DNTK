/* eslint-disable */
import type Long from "long";
import type { MassiveWaterInfo } from "./MassiveWaterInfo.d.ts";
import type { MassiveGrassInfo } from "./MassiveGrassInfo.d.ts";
import type { MassiveBoxInfo } from "./MassiveBoxInfo.d.ts";

export interface ServerMassiveEntity {
  EntityType?: number;
  ConfigId?: number;
  RuntimeId?: number;
  AuthorityPeerId?: number;
  ObjId?: Long;
  WaterInfo?: MassiveWaterInfo | undefined;
  GrassInfo?: MassiveGrassInfo | undefined;
  BoxInfo?: MassiveBoxInfo | undefined;
}
