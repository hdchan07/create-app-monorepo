import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'pathe';
import charsetRemovalPlugin from './plugins/charset-removal';

function baseConfig() {
  const cwd = process.cwd();

  return defineConfig({
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
      vue({
        template: {
          compilerOptions: {
            // 删除注释
            comments: false,
          },
        },
      }),
      vueJsx(),
    ],
    css: {
      postcss: {
        plugins: [
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
  });
}

export default baseConfig;
