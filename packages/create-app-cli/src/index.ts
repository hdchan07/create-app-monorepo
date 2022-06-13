import type { UserConfigExport, ConfigEnv } from './vite/type';

export function defineConfig(config: UserConfigExport) {
  if (typeof config === 'function') {
    /**
     * as default
     * preview: {command: 'serve' mode: 'production'}
     * dev: {command: 'serve' mode: 'development'}
     * build: {command: 'build' mode: 'production'}
     */
    return () => config({
      mode: process.env.NODE_ENV!,
      viteCommand: process.env.COMMAND === 'build' ? 'build' : 'serve',
      command: process.env.COMMAND as ConfigEnv['command'],
    });
  }
  return config;
}

export {
  UserConfigExport,
};
