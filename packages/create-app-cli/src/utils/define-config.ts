import type { ViteOptions, UserConfig } from '../vite/type';

export default function defineConfig<T>(fn: (config?: ViteOptions, ...args: T[]) => UserConfig | Promise<UserConfig>) {
  return fn;
}
