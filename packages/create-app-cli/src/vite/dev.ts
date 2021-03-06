import type { UserConfig } from 'vite';
import { defineConfig as defineViteConfig, mergeConfig } from 'vite';
import defineConfig from '../utils/define-config';
import loadConfig from '../utils/load-config';

export default defineConfig(async (config) => {
  let userConfig = await loadConfig();

  if (config) {
    userConfig = mergeConfig(userConfig, Object.assign(config, {
      mode: process.env.NODE_ENV,
      configFile: false,
    }));
  }

  if (userConfig) {
    userConfig.server.open = userConfig.server.open ?? true;
  }

  return defineViteConfig(userConfig) as UserConfig;
});
