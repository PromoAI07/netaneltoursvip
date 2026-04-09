import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Transforms render-blocking <link rel="stylesheet"> into async preload links
function asyncCSSPlugin(): Plugin {
  return {
    name: 'async-css',
    apply: 'build',
    transformIndexHtml(html) {
      return html.replace(
        /<link rel="stylesheet" crossorigin href="([^"]+)">/g,
        (_, href) =>
          `<link rel="preload" href="${href}" as="style" onload="this.onload=null;this.rel='stylesheet'">` +
          `<noscript><link rel="stylesheet" crossorigin href="${href}"></noscript>`
      );
    },
  };
}

export default defineConfig({
  plugins: [react(), asyncCSSPlugin()],
  build: {
    minify: 'esbuild',
    cssMinify: true,
    target: ['es2020', 'chrome80', 'safari14'],
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react'],
        },
      },
    },
    assetsInlineLimit: 4096,
    sourcemap: false,
    cssCodeSplit: true,
  },
})
