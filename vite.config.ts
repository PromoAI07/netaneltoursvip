import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
    assetsInlineLimit: 4096,
    sourcemap: false,
    cssCodeSplit: true,
  },
  server: {
    compress: true,
  },
})
