import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
  },
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Ignore warnings about unresolved imports
        if (warning.code === 'UNRESOLVED_IMPORT') {
          return;
        }
        warn(warning);
      }
    }
  }
})
