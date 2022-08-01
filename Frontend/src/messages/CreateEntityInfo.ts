/* eslint-disable */
import type { Vector } from "./Vector";
import type { CreateGadgetInfo } from "./CreateGadgetInfo";

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
