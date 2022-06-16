import defineConfig from '../utils/define-config';
import loadConfig from '../utils/load-config';
import { analyzePlugin } from './plugins/analyze';

export default defineConfig(async (config, useAnalyze: boolean) => {
  const userConfig = await loadConfig();

  if (useAnalyze) {
    userConfig.plugins = [...(userConfig.plugins || []), ...analyzePlugin(config?.analyze)];
  }

  return userConfig;
});
