import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import { configDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{
      find: '@',
      replacement: path.resolve(__dirname, './src')
    },
    {
      find: '@/assets',
      replacement: path.resolve(__dirname, './src/assets')
    },
    {
      find: '@/components',
      replacement: path.resolve(__dirname, './src/components')
    },
    {
      find: '@/configs',
      replacement: path.resolve(__dirname, './src/configs')
    },
    {
      find: '@/constants',
      replacement: path.resolve(__dirname, './src/constants')
    },
    {
      find: '@/service',
      replacement: path.resolve(__dirname, './src/service')
    },
    {
      find: '@/utils',
      replacement: path.resolve(__dirname, './src/utils')
    },
    {
      find: '@/hooks',
      replacement: path.resolve(__dirname, './src/hooks')
    },
    ],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    exclude: [...configDefaults.exclude, 'e2e/*'],
  },
})
