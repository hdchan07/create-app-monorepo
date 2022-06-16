import { preview } from 'vite';
import { defineCreateAppCommand } from '../utils/define-command';
import getPreviewConfig from '../vite/preview';
import type { CLIInvokeResult } from './type';

export default defineCreateAppCommand({
  meta: {
    name: 'preview',
    usage: 'npx create-app preview|start [--open, -o] [--port, -p] [--host, -h]',
    description: '本地预览生产构建产物',
  },
  async invoke(args) {
    process.env.NODE_ENV = process.env.NODE_ENV || 'production';

    const previewConfig = await getPreviewConfig({
      preview: {
        open: args?.open || args?.o,
        port: args?.port || args?.p,
        host: args?.host || args?.h,
      },
    });

    const previewServer = await preview(previewConfig);

    previewServer.printUrls();

    return 'wait' as CLIInvokeResult;
  },
});
