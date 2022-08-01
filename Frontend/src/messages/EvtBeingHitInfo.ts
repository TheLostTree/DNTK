/* eslint-disable */
import type { AttackResult } from "./AttackResult.ts";

export interface EvtBeingHitInfo {
  PeerId?: number;
  AttackResult?: AttackResult;
  FrameNum?: number;
}
