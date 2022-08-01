/* eslint-disable */
import type { ServerLogType } from "./ServerLogType.ts";
import type { ServerLogLevel } from "./ServerLogLevel.ts";

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
