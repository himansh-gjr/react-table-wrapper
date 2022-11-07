import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.jsx'),
      name: 'React table wrapper',
      fileName: (format) => `react-table-wrapper.${format}.js`
    },
  },
  plugins: [react()]
})