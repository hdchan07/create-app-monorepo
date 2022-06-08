import { defineCreateAppCommand } from '../utils/define-command';

export default defineCreateAppCommand({
  meta: {
    name: 'dev',
    usage: 'npx create-app dev [--open, -o] [--port, -p] [--host, -h]',
    description: 'vite 开发模式',
  },
  invoke(args) {
    process.env.NODE_ENV = process.env.NODE_ENV || 'development';

    const devOpts = {
      open: args?.open || args?.o,
      port: args?.port || args?.p || 8080,
      host: args?.host || args?.h || '0.0.0.0',
    };
    console.log('dev ---- ', args, devOpts);
  },
});
