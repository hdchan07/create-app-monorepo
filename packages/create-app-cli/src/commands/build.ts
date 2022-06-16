import { execSync } from 'node:child_process';
import { join, normalize } from 'pathe';
import consola from 'consola';
import { build as viteBuild } from 'vite';
import { defineCreateAppCommand } from '../utils/define-command';
import { exists, clearDir } from '../utils/fs';
import getBuildConfig from '../vite/build';
import { name } from '../../package.json';

async function checkEsbuildInstall() {
  const cwd = process.cwd();

  await Promise.all(
    [
      normalize(join(cwd, 'node_modules/esbuild/install.js')),
      normalize(join(cwd, 'node_modules', name, 'node_modules/esbuild/install.js')),
    ]
      .map(async (file) => {
        return await exists(file) ? execSync(`node ${file}`, { stdio: 'inherit' }) : null;
      }),
  ).catch(() => { /* ignore error */ });
}

export default defineCreateAppCommand({
  meta: {
    name: 'build',
    usage: 'npx create-app build [--analyze]',
    description: '为生产环境构建产物',
  },
  async invoke(args) {
    process.env.NODE_ENV = process.env.NODE_ENV || 'production';

    const buildConfig = await getBuildConfig({}, !!args?.analyze);

    try {
      const npmVersionBuff = await execSync('npm -v');

      const nvs = npmVersionBuff.toString();
      const v = nvs.split('.')[0];

      consola.info('create app -- node version', `v${process.versions.node}`);
      consola.log(`create app -- npm version ${nvs}`);

      if (Number(v) < 7) {
        await checkEsbuildInstall();
      }
    } catch (err) {
      consola.warn(err);
    }

    if (buildConfig.build?.outDir) {
      await clearDir(buildConfig.build.outDir);
    }

    await viteBuild(buildConfig);
  },
});
