/* eslint-disable */
import type { AttackResult } from "./AttackResult.ts";

export interface EvtHittingOtherInfo {
  AttackResult?: AttackResult;
  PeerId?: number;
}
