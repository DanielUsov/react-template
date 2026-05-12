import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/variables" as *;`
      }
    }
  },
  assetsInclude: [
    '**/*.svg',
    '**/*.png',
    '**/*.jpg',
    '**/*.gif',
    '**/*.webp',
    '**/*.avif',
    '**/*.woff2'
  ],
  resolve: {
    tsconfigPaths: true
  },
  build: {
    target: 'es2023',
    sourcemap: true,
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'large-libs',
              test: /node_modules/,
              minSize: 100000,
              maxSize: 250000,
              priority: 10
            }
          ]
        }
      }
    }
  },

  server: {
    port: 3000,
    strictPort: true,
    open: true
  },

  preview: {
    port: 4000,
    strictPort: true
  }
});
