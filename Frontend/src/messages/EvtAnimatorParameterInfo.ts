/* eslint-disable */
import type { AnimatorParameterValueInfo } from "./AnimatorParameterValueInfo.ts";

export interface EvtAnimatorParameterInfo {
  EntityId?: number;
  IsServerCache?: boolean;
  Value?: AnimatorParameterValueInfo;
  NameId?: number;
}
