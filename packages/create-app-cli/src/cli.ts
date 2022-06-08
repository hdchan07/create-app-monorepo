#!/usr/bin/env node
import minimist from 'minimist';
import { red } from 'colorette';
import showBanner from './utils/show-banner';
import { commands } from './commands';

async function main() {
  const argv = minimist(process.argv.slice(2), {
    boolean: [
      'no-clear',
    ],
  });
  const command = argv._.shift();
  showBanner(command === 'dev' && argv.clear !== false && !argv.help);

  console.log(222, argv);
  console.log(333, command);

  if (!(command! in commands)) {
    console.log(`\n${red(`Invalid command ${command}`)}`);

    await commands.usage().then(r => r.invoke());
    process.exit(1);
  }
}

function run() {
  main();
}

run();
