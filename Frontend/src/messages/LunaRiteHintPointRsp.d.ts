/* eslint-disable */
import type { LunaRiteHintStatusType } from "./LunaRiteHintStatusType.d.ts";
import type { LunaRiteHintPoint } from "./LunaRiteHintPoint.d.ts";

/**
 * CmdId: 8765
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface LunaRiteHintPointRsp {
  HintStatus?: LunaRiteHintStatusType;
  AreaId?: number;
  Retcode?: number;
  HintPoint?: LunaRiteHintPoint[];
}
