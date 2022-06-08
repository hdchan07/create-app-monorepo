import type minimist from 'minimist';
import type { COMMAND_ENUM } from './constant';

export interface CreateAppCommandMeta {
  name: string;
  usage: string;
  description: string;
  [key: string]: any;
}

export type CLIInvokeResult = void | 'error' | 'wait';

export interface CreateAppCommand {
  invoke(args?: minimist.ParsedArgs): Promise<CLIInvokeResult> | CLIInvokeResult;
  meta: CreateAppCommandMeta;
}

export type CommandsMap = Record<COMMAND_ENUM, () => Promise<CreateAppCommand>>;
export type Command = keyof CommandsMap;
