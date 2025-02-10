/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  server: {
    port: 8080,
  },
  define: {
    'process.env': {}
  },
  esbuild: {
    tsconfigRaw: {
      compilerOptions: {
        target: 'es2020',
      }
    }
  }
})