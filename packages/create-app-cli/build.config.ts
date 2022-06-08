import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  declaration: true,
  rollup: {
    inlineDependencies: true,
    emitCJS: true,
  },
  clean: true,
  entries: [
    'src/index',
    'src/cli',
  ],
  externals: [
    'node:url',
    'node:buffer',
    'node:path',
    'node:child_process',
    'node:process',
    'node:path',
    'node:os',
  ],
});
