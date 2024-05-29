import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  {
    extends: './vite.config.ts',
    test: {
      environment: 'happy-dom',
      setupFiles: ['./setupTests.ts'],
      isolate: false,
      // poolOptions: {
      //   threads: {
      //     singleThread: true,
      //   },
      // },
    },
  },
])
