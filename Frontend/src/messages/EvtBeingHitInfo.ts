/* eslint-disable */
import type { AttackResult } from "./AttackResult";

export interface EvtBeingHitInfo {
  PeerId?: number;
  AttackResult?: AttackResult;
  FrameNum?: number;
}
