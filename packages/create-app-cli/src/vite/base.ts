import type { UserConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import { resolve } from 'pathe';
import charsetRemovalPlugin from './plugins/charset-removal';
import defineConfig from '../utils/define-config';

export default defineConfig((config) => {
  const cwd = process.cwd();

  return {
    typeCheck: true,
    eslint: true,
    strip: true,

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
  } as UserConfig;
});
