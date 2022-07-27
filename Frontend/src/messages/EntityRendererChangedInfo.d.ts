/* eslint-disable */
export interface EntityRendererChangedInfo {
  ChangedRenderers?: { [key: string]: number };
  VisibilityCount?: number;
  IsCached?: boolean;
}

export interface EntityRendererChangedInfo_ChangedRenderersEntry {
  Key: string;
  Value: number;
}
