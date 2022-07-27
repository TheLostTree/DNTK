/* eslint-disable */
import type { AttackResult } from "./AttackResult.d.ts";

export interface EvtBeingHitInfo {
  PeerId?: number;
  AttackResult?: AttackResult;
  FrameNum?: number;
}
