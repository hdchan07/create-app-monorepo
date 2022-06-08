import minimist from 'minimist';
import { red } from 'colorette';
import showBanner from './utils/show-banner';
import { commands } from './commands';
import getDefault from './utils/get-default';
import consola from 'consola';
import { showHelp } from './utils/help';
import { checkEngines } from './utils/engines';
import type { Command } from './commands/type';

export async function main() {
  const args = minimist(process.argv.slice(2), {
    boolean: [
      'no-clear',
    ],
  });
  const command = args._.shift() || 'usage';
  showBanner(command === 'dev' && args.clear !== false && !args.help);

  consola.log(222, args);
  console.log(333, command);

  if (!(command! in commands)) {
    consola.error(`\n${red(`Invalid command ${command}`)}`);

    const createAppCommand = await commands.usage().then(getDefault);
    createAppCommand?.invoke();

    process.exit(1);
  }

  setTimeout(() => {
    try {
      checkEngines();
    } catch (err) {
      // 不报错
    }
  }, 1000);

  const cmd = await commands[command as Command]().then(getDefault);

  if (args.h || args.help) {
    showHelp(cmd.meta);
  } else {
    const result = await cmd.invoke(args);
    return result;
  }
}

consola.wrapConsole();

process.on('unhandledRejection', err => consola.error('[unhandledRejection]', err));
process.on('uncaughtException', err => consola.error('[uncaughtException]', err));

export function run() {
  return main()
    .then((result) => {
      if (result === 'error') {
        process.exit(1);
      } else if (result !== 'wait') {
        process.exit(0);
      }
    })
    .catch((error) => {
      consola.error(error);
      process.exit(1);
    });
}
