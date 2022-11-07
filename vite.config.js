import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    react(),
  ],
  build: {
    lib: {
      entry: resolve('src', 'components/index.jsx'),
      name: 'ReactViteLibrary',
      formats: ['es', 'umd'],
      fileName: (format) => `local-table.${format}.js`,
    },
  },
}))
