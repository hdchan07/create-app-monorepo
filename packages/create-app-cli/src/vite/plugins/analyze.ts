import type { Plugin } from 'vite';
import { transform } from 'esbuild';
import { visualizer } from 'rollup-plugin-visualizer';
import type { PluginsConfig } from '../type';

export function analyzePlugin(opts: PluginsConfig['analyze']): Plugin[] {
  return [
    {
      name: 'create-app:analyze-minify',
      async generateBundle(_opts, outputBundle) {
        for (const [_bundleId, bundle] of Object.entries(outputBundle)) {
          if (bundle.type !== 'chunk') {
            continue;
          }
          const originalEntries = Object.entries(bundle.modules);
          const minifiedEntries = await Promise.all(originalEntries.map(async ([moduleId, module]) => {
            const { code } = await transform(module.code || '', { minify: true });
            return [
              moduleId,
              { ...module, code },
            ];
          }));
          bundle.modules = Object.fromEntries(minifiedEntries);
        }
      },
    },
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
      ...(opts || {}),
    }),
  ];
}
