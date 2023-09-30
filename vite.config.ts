/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, splitVendorChunkPlugin, type ServerOptions } from 'vite'
import react from '@vitejs/plugin-react-swc'

const baseServerOptions: ServerOptions = {
  port: 3000,
  host: true,
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin()
  ],
  server: {
    ...baseServerOptions,
    open: process.env.NODE_ENV === 'development',
  },
  preview: {
    ...baseServerOptions,
    open: true,
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      provider: 'v8',
      reporter: ['text-summary', 'html'],
    },
  },
})
