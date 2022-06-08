import type { CreateAppCommand, CommandsMap } from './type';
import { COMMAND_ENUM } from './type';
import getDefault from '../utils/get-default';

const _getDefault = <T>(fn: T) => getDefault(fn) as unknown as Promise<CreateAppCommand>;

export const commands: CommandsMap = {
  [COMMAND_ENUM.dev]: () => (import('./dev').then(_getDefault)),

  [COMMAND_ENUM.usage]: () => (import('./usage').then(_getDefault)),
};
