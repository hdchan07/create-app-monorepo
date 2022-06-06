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
  ],
});
