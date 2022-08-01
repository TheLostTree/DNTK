/* eslint-disable */
import type { Vector } from "./Vector.ts";

/**
 * CmdId: 1199
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface WindSeedClientNotify {
  RefreshNotify?: WindSeedClientNotify_RefreshNotify | undefined;
  AddWindBulletNotify?: WindSeedClientNotify_AddWindBulletNotify | undefined;
  AreaNotify?: WindSeedClientNotify_AreaNotify | undefined;
}

export interface WindSeedClientNotify_RefreshNotify {
  RefreshNum?: number;
}

export interface WindSeedClientNotify_AddWindBulletNotify {
  SeedPos?: Vector;
  CatchPlayerUid?: number;
  SeedEntityId?: number;
}

export interface WindSeedClientNotify_AreaNotify {
  AreaCode?: Buffer;
  AreaId?: number;
  AreaType?: number;
}
