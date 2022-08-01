/* eslint-disable */
import type { Vector } from "./Vector.ts";

/**
 * CmdId: 270
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface BeginCameraSceneLookNotify {
  Unk2700DHAHEKOGHBJ?: number;
  ScreenY?: number;
  IsForce?: boolean;
  IsRecoverKeepCurrent?: boolean;
  OtherParams?: string[];
  Duration?: number;
  Unk2700HIAKNNCKHJB?: BeginCameraSceneLookNotify_Unk2700LNCHDDOOECD;
  LookPos?: Vector;
  IsAllowInput?: boolean;
  IsChangePlayMode?: boolean;
  EntityId?: number;
  IsForceWalk?: boolean;
  ScreenX?: number;
  FollowPos?: Vector;
  IsSetFollowPos?: boolean;
  IsSetScreenXy?: boolean;
}

export enum BeginCameraSceneLookNotify_Unk2700LNCHDDOOECD {
  Unk2700_LNCHDDOOECD_Unk2700_ACOENBMDFBP = 0,
  Unk2700_LNCHDDOOECD_Unk2700_FKBLCDFLCOM = 1,
  UNRECOGNIZED = -1,
}
