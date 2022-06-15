import { defineConfig } from '@hdchan/create-app-cli';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig(() => {
  return {
    eslint: {
      fix: true,
      cache: true,
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [
      eslintPlugin(),
    ],
  };
});
