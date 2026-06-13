// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const globalScope =
  /** @type {{ process?: { env?: Record<string, string | undefined> } }} */ (globalThis);
const env = globalScope.process?.env ?? {};

// https://astro.build/config
export default defineConfig({
  ...(env.ASTRO_SITE ? { site: env.ASTRO_SITE } : {}),
  ...(env.ASTRO_BASE ? { base: env.ASTRO_BASE } : {}),
  vite: {
    plugins: [tailwindcss()],
  },
});
