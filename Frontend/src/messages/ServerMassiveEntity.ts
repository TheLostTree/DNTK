/* eslint-disable */
import type Long from "long";
import type { MassiveWaterInfo } from "./MassiveWaterInfo";
import type { MassiveGrassInfo } from "./MassiveGrassInfo";
import type { MassiveBoxInfo } from "./MassiveBoxInfo";

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
