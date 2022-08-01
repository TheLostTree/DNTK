/* eslint-disable */
/**
 * CmdId: 456
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface QuestUpdateQuestTimeVarNotify {
  TimeVarMap?: { [key: number]: number };
  ParentQuestId?: number;
}

export interface QuestUpdateQuestTimeVarNotify_TimeVarMapEntry {
  Key: number;
  Value: number;
}
