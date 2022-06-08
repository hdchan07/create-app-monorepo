import baseConfig from './vite/base';
import { mergeConfig } from 'vite';
import { join } from 'pathe';

export {};

console.log(333, mergeConfig(baseConfig(), {
  css: {
    postcss: {
      preprocessorOptions: {
        scss: {
          additionalData(content: string, resourcePath: string) {
            const stylesStr = [
              '@use "sass:math";',
              '@import "@/styles/import.scss";',
              '@import "@/styles/color.scss";',
            ].join(' ');
            const styleRootPath = join(__dirname, 'src/styles').replace(/\\/g, '/');
            // styles文件夹下不导入上面文件
            if (resourcePath.startsWith(styleRootPath)) {
              return content;
            }
            return stylesStr + content;
          },
          charset: false,
        },
      },
    },
  },
}));
