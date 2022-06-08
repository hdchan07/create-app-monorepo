import { cyan, magenta } from 'colorette';
import consola from 'consola';
import type { CreateAppCommandMeta } from '../commands/type.d';

export function showHelp(meta?: CreateAppCommandMeta) {
  const sections: string[] = [];

  if (meta?.usage) {
    sections.push(`${magenta('> ')}Usage: ${cyan(meta.usage)}`);
  }

  if (meta?.description) {
    sections.push(magenta('⋮ ') + meta.description);
  }

  sections.push(`使用 ${cyan('create-app [command] --help')} 查看其它命令`);

  consola.log(`${sections.join('\n\n')}\n`);
}
