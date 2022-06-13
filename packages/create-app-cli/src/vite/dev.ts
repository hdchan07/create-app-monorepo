import type { UserConfig } from 'vite';
import { defineConfig as defineViteConfig, mergeConfig } from 'vite';
import defineConfig from '../utils/define-config';
import loadConfig from '../utils/load-config';

export default defineConfig(async (config) => {
  const userConfig = await loadConfig();
  if (config) {
    mergeConfig(userConfig, Object.assign(config, {
      mode: process.env.NODE_ENV,
      root: userConfig.rootDir,
      configFile: false,
    }));
  }

  if (userConfig) {
    userConfig.server.open = userConfig.server.open ?? true;
  }

  return defineViteConfig(userConfig) as UserConfig;
});
