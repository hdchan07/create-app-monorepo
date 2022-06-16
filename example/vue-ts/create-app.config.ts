import { defineConfig } from '@hdchan/create-app-cli';

export default defineConfig(() => {
  return {
    eslint: {
      fix: true,
      cache: true,
    },
    server: {
      port: 8080,
      host: '0.0.0.0',
    },
  };
});
