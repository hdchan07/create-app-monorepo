import { satisfies } from 'semver';
import { engines } from '../../package.json';

export async function checkEngines() {
  const currentNode = process.versions.node;
  const nodeRange = engines.node;

  if (!satisfies(currentNode, nodeRange)) {
    console.warn(`不支持当前 Node.js 版本 (\`${currentNode}\`).\n 请升级到兼容版本 (${nodeRange}).`);
  }
}
