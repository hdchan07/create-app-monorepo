import { cyan } from 'colorette';
import consola from 'consola';
import { showHelp } from '../utils/help';
import { defineCreateAppCommand } from '../utils/define-command';
import { COMMAND_ENUM } from './type';

export default defineCreateAppCommand({
  meta: {
    name: 'usage',
    usage: 'create-app help',
    description: '使用帮助',
  },
  invoke() {
    const sections: string[] = [];

    sections.push(`Usage: ${cyan(`npx create-app ${Object.keys(COMMAND_ENUM).join(' | ')} [args]`)}`);

    consola.log(`${sections.join('\n\n')}\n`);

    showHelp();
  },
});
