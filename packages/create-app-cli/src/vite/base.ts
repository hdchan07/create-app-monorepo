import type { UserConfig } from 'vite';
import { defineConfig as defineViteConfig, mergeConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import { resolve } from 'pathe';
import charsetRemovalPlugin from './plugins/charset-removal';
import defineConfig from '../utils/define-config';

export default defineConfig((config) => {
  const cwd = process.cwd();
  const isDev = process.env.NODE_ENV === 'development';

  const vueOptions = mergeConfig({
    template: {
      isProduction: !isDev,
      script: {
        isProd: !isDev,
      },
      compilerOptions: {
        // 删除注释
        comments: false,
      },
    },
  }, config?.vue || {});

  return defineViteConfig({
    server: {
      port: 8080,
      host: '0.0.0.0',
    },
    resolve: {
      alias: {
        '@': resolve(cwd, './src'),
        '~@': resolve(cwd, './src'),
      },
    },
    plugins: [
      vue(vueOptions),
      vueJsx(),
    ],
    css: {
      postcss: {
        plugins: [
          autoprefixer(
            config?.autoprefixer
              ? config.autoprefixer
              : undefined,
          ),
          cssnano(
            config?.cssnano
              ? config.cssnano
              : undefined,
          ),
          charsetRemovalPlugin(),
        ],
      },
    },
    build: {
      target: 'es6',
      cssTarget: 'chrome54',
      brotliSize: false,
      chunkSizeWarningLimit: 1000,
    },
  }) as UserConfig;
});
