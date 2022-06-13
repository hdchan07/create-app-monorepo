import path from 'path';
import { defineConfig } from '@hdchan/create-app-cli';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig(({ command, mode }) => {
  console.log('sssdada2323', command, mode);
  return {
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
    // plugins: [
    //   vue(),
    //   vueJsx(),
    // ],
  };
});
