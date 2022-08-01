/* eslint-disable */
export interface Quest {
  QuestId?: number;
  State?: number;
  StartTime?: number;
  IsRandom?: boolean;
  ParentQuestId?: number;
  QuestConfigId?: number;
  StartGameTime?: number;
  AcceptTime?: number;
  LackedNpcList?: number[];
  FinishProgressList?: number[];
  FailProgressList?: number[];
  LackedNpcMap?: { [key: number]: number };
  LackedPlaceList?: number[];
  LackedPlaceMap?: { [key: number]: number };
}

export interface Quest_LackedNpcMapEntry {
  Key: number;
  Value: number;
}

export interface Quest_LackedPlaceMapEntry {
  Key: number;
  Value: number;
}
