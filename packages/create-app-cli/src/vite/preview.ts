import defineConfig from '../utils/define-config';
import loadConfig from '../utils/load-config';
import { isNumber, isString } from '../utils/type-check';

function getVal<T, U>(data: T, defaultValue: U) {
  return isNumber(data) || isString(data) ? data : defaultValue;
}

export default defineConfig(async (config) => {
  const userConfig = await loadConfig();

  if (config?.preview) {
    const { open, host, port } = config.preview;
    userConfig.preview = userConfig.preview || {};

    userConfig.preview.open = open ?? userConfig.preview.open ?? true;
    userConfig.preview.host = getVal(host, userConfig.preview.host);
    userConfig.preview.port = getVal(port, userConfig.preview.port);
  }

  return userConfig;
});
