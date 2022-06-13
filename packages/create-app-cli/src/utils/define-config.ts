import type { ViteOptions } from '../vite/type';
import type { UserConfig } from 'vite';

export default function defineConfig(fn: (config?: ViteOptions) => UserConfig | Promise<UserConfig>) {
  return fn;
}
