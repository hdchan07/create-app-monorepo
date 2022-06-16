import type {
  InlineConfig,
  SSROptions,
  UserConfig as ViteUserConfig,
  ConfigEnv as ViteConfigEnv,
} from 'vite';
import type {
  Options as VuePluginOptions,
} from '@vitejs/plugin-vue';
import type {
  Options as CssnanoPluginOptions,
} from 'cssnano';
import type { Options as AutoprefixerPluginOptions } from 'autoprefixer';
import type { UserPluginConfig } from 'vite-plugin-checker';
import type { Options as eslintPluginOptions } from 'vite-plugin-eslint';
import type { PluginVisualizerOptions } from 'rollup-plugin-visualizer';

import type { Command } from '../commands/type';

export interface PluginsConfig {
  vue?: VuePluginOptions;
  cssnano?: CssnanoPluginOptions;
  typeCheck?: boolean | UserPluginConfig;
  eslint?: boolean | (eslintPluginOptions & { fix?: boolean; cache?: boolean; }); /** vite-plugin-eslint 支持该属性，但type缺失 */
  autoprefixer?: AutoprefixerPluginOptions;
  strip?: boolean;
  ssr?: SSROptions;

  analyze?: PluginVisualizerOptions;
}

export type ViteOptions = PluginsConfig & InlineConfig;

export type UserConfig = ViteUserConfig & PluginsConfig & {
  extends?: string | string[];
};

export interface ConfigEnv {
  mode: ViteConfigEnv['mode'];
  viteCommand: ViteConfigEnv['command'];
  command: Command;
}

export type UserConfigFn = (env: ConfigEnv) => UserConfig | Promise<UserConfig>;

export type UserConfigExport = UserConfig | Promise<UserConfig> | UserConfigFn;
