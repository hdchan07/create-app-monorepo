import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    // eslintPlugin({
    //   fix: true,
    // } as any /** fix存在 */),
  ],
});
