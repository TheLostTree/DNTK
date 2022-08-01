/* eslint-disable */
import type { ServerLogType } from "./ServerLogType";
import type { ServerLogLevel } from "./ServerLogLevel";

/**
 * CmdId: 31
 * EnetChannelId: 1
 * EnetIsReliable: true
 */
export interface ServerLogNotify {
  ServerLog?: string;
  LogType?: ServerLogType;
  LogLevel?: ServerLogLevel;
}
