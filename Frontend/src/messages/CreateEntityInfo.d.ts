/* eslint-disable */
import type { Vector } from "./Vector.d.ts";
import type { CreateGadgetInfo } from "./CreateGadgetInfo.d.ts";

export interface CreateEntityInfo {
  Level?: number;
  Pos?: Vector;
  Rot?: Vector;
  SceneId?: number;
  RoomId?: number;
  ClientUniqueId?: number;
  MonsterId?: number | undefined;
  NpcId?: number | undefined;
  GadgetId?: number | undefined;
  ItemId?: number | undefined;
  Gadget?: CreateGadgetInfo | undefined;
}
