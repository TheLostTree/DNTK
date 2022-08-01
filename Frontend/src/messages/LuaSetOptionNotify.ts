/* eslint-disable */
/**
 * CmdId: 316
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface LuaSetOptionNotify {
  LuaSetParam?: string;
  OptionType?: LuaSetOptionNotify_LuaOptionType;
}

export enum LuaSetOptionNotify_LuaOptionType {
  LUA_OPTION_TYPE_NONE = 0,
  LUA_OPTION_TYPE_PLAYER_INPUT = 1,
  UNRECOGNIZED = -1,
}
