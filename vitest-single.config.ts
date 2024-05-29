import { defineConfig } from 'vitest/config'
import { mergeConfig } from 'vite'

import viteConfig from './vite.config'

// https://vitejs.dev/config/
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      isolate: false,
      environment: 'happy-dom',
      setupFiles: ['./setupTests.ts'],
    },
  })
)
