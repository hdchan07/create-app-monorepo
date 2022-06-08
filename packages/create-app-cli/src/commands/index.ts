import type { CreateAppCommand, CommandsMap } from './type';
import { COMMAND_ENUM } from './constant';

const _getDefault = <T extends Record<'default', CreateAppCommand>>(fn: T) => fn.default || fn;

export const commands: CommandsMap = {
  [COMMAND_ENUM.dev]: () => import('./dev').then(_getDefault),

  [COMMAND_ENUM.usage]: () => import('./usage').then(_getDefault),
};
