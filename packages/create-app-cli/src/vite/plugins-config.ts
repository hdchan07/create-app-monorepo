import type { UserConfig, PluginOption, Plugin } from 'vite';
import { mergeConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import checker from 'vite-plugin-checker';
import eslintPlugin from 'vite-plugin-eslint';
import strip from '@rollup/plugin-strip';
import { visualizer } from 'rollup-plugin-visualizer';

import defineConfig from '../utils/define-config';
import isObject from '../utils/is-object';

export default defineConfig((config) => {
  const vueOptions = mergeConfig({
    template: {
      compilerOptions: {
        // 删除注释
        comments: false,
      },
    },
  }, config?.vue || {});
  // 判断用户是否自定义该插件
  const hasPlugins = {
    vue: false,
    vueJsx: false,
    typeChecker: false,
    eslint: false,
    strip: false,
  };

  config?.plugins?.forEach((plugin) => {
    const { name } = plugin as { name: string; } & PluginOption;

    if (name === 'vite:vue') {
      hasPlugins.vue = true;
    }
    if (name === 'vite:vue-jsx') {
      hasPlugins.vueJsx = true;
    }
    if (name === 'vite-plugin-checker') {
      hasPlugins.typeChecker = true;
    }
    if (name === 'strip') {
      hasPlugins.strip = true;
    }
  });

  const _config = {
    plugins: [
      !hasPlugins.vue
        ? vue(vueOptions)
        : null,

      !hasPlugins.vueJsx
        ? vueJsx()
        : null,

      !hasPlugins.typeChecker && config?.typeCheck !== false
        ? {
            ...checker((() => {
              return isObject(config?.typeCheck)
                ? config?.typeCheck
                : { typescript: true };
            })()),
            apply: 'serve',
          }
        : null,

      !hasPlugins.eslint && config?.eslint !== false
        ? {
            ...eslintPlugin(isObject(config?.typeCheck) ? config!.typeCheck : {}),
          }
        : null,

      !hasPlugins.strip
        ? {
            ...strip({
              exclude: /[\\/]node_modules[\\/]/,
              include: ['src/**/*'],
              functions: ['debug', 'info', 'log', 'warn', 'dir', 'dirxml', 'table', 'trace', 'group', 'groupCollapsed', 'groupEnd', 'clear', 'count', 'countReset', 'assert', 'profile', 'profileEnd', 'time', 'timeLog', 'timeEnd', 'timeStamp', 'context', 'memory', 'assert.*'],
              sourceMap: false,
            }),
            apply: 'build',
          }
        : null,

    ].filter(Boolean) as Plugin[],
  };

  return _config as UserConfig;
});
