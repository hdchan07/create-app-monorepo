import type { ViteOptions, UserConfig } from '../vite/type';

export default function defineConfig(fn: (config?: ViteOptions) => UserConfig | Promise<UserConfig>) {
  return fn;
}
