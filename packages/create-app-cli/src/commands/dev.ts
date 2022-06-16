import { createServer } from 'vite';
import { defineCreateAppCommand } from '../utils/define-command';
import getDevConfig from '../vite/dev';
import type { CLIInvokeResult } from './type';

export default defineCreateAppCommand({
  meta: {
    name: 'dev',
    usage: 'npx create-app dev [--open, -o] [--port, -p] [--host, -h]',
    description: '开发模式, 启动开发服务器',
  },
  async invoke(args) {
    process.env.NODE_ENV = process.env.NODE_ENV || 'development';

    const devConfig = await getDevConfig({
      server: {
        open: args?.open || args?.o,
        port: args?.port || args?.p,
        host: args?.host || args?.h,
      },
    });

    const viteServer = await createServer(devConfig);

    await viteServer.listen();

    viteServer.printUrls();

    return 'wait' as CLIInvokeResult;
  },
});
