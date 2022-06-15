import { resolve } from 'pathe';
import { mergeConfig } from 'vite';
import { loadConfig as _loadConfig } from 'c12';
import getBaseConfig from '../vite/base';
import getPlugin from '../vite/plugins-config';
import type { UserConfig } from '../vite/type';

interface Layer {
  config: UserConfig;
  configFile: string;
  cwd: string;
}

export default async function loadConfig() {
  const { config, configFile, layers, cwd } = await _loadConfig({
    name: 'create-app',
    configFile: 'create-app.config',
    rcFile: '.create-app-rc',
    dotenv: true,
    globalRc: true,
  });

  config.rootDir = config.rootDir || cwd;
  config._configFile = configFile;
  config._configFiles = [configFile];

  let _layer = {
    config: {} as UserConfig,
  };

  if (layers) {
    for (const layer of layers) {
      layer.config.rootDir = layer.config.rootDir ?? layer.cwd;
      layer.config.srcDir = resolve(layer.config.rootDir, layer.config.srcDir);
    }

    config._layers = layers.filter(layer => layer.configFile && !layer.configFile.endsWith('.create-app-rc')) as Layer[];

    _layer = (config._layers as Layer[])?.reduce((previous, current) => {
      previous.config = mergeConfig(
        previous.config || {},
        current.config,
      );
      return previous;
    }, {} as Layer);

    _layer.config = mergeConfig(getBaseConfig({
      cssnano: _layer.config.cssnano,
      autoprefixer: _layer.config.autoprefixer,
    }), _layer.config);
  } else {
    const _c = await getBaseConfig();
    _layer.config = mergeConfig(_c, _layer.config);
  }
  // 设置 plugins
  _layer.config = mergeConfig(_layer.config, getPlugin(_layer.config));
  /**
   * 这里清空 plugins，由于 mergeConfig 会把 plugins重复，此处 config.plugins === _layer.config.plugins
   */
  config.plugins = [];

  return mergeConfig(config, _layer.config);
}
