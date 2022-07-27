/* eslint-disable */
/**
 * CmdId: 8207
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ClearRoguelikeCurseNotify {
  ClearCurseMap?: { [key: number]: number };
  IsClearAll?: boolean;
  CardId?: number;
  IsCurseAllClear?: boolean;
}

export interface ClearRoguelikeCurseNotify_ClearCurseMapEntry {
  Key: number;
  Value: number;
}
