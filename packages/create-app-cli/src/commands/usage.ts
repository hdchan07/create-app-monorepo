import { cyan } from 'colorette';
import consola from 'consola';
import { showHelp } from '../utils/help';
import { defineCreateAppCommand } from '../utils/define-create-app-command';
import { COMMAND_ENUM } from './constant';

export default defineCreateAppCommand({
  meta: {
    name: '帮助',
    usage: '使用帮助',
    description: '使用帮助',
  },
  invoke() {
    const sections: string[] = [];

    sections.push(`使用: ${cyan(`create-app ${Object.keys(COMMAND_ENUM).join('|')} [args]`)}`);

    consola.log(`${sections.join('\n\n')}\n`);

    showHelp();
  },
});
