import { cyan, magenta } from 'colorette';
import consola from 'consola';
import type { CreateAppCommandMeta } from '../commands/type';

export function showHelp(meta?: CreateAppCommandMeta) {
  const sections: string[] = [];

  if (meta?.usage) {
    sections.push(`${magenta('> ')}Usage: ${cyan(meta.usage)}`);
  }

  if (meta?.description) {
    sections.push(magenta('⋮ ') + meta.description);
  }

  sections.push(`Use ${cyan('npx create-app [command] --help')} to see help for each command`);

  consola.log(`${sections.join('\n\n')}\n`);
}
