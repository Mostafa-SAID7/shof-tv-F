/// <reference types="vitest" />
import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  resolve: {
    mainFields: ['module'],
    alias: {
      '@': resolve(__dirname, './src'),
      '@app': resolve(__dirname, './src/app'),
      '@components': resolve(__dirname, './src/app/components'),
      '@pages': resolve(__dirname, './src/app/pages'),
      '@shared': resolve(__dirname, './src/app/shared'),
      '@platform': resolve(__dirname, './src/app/platform'),
    },
  },

  plugins: [
    // The angular plugin MUST be first
    angular({
      tsconfig: mode === 'test' ? 'tsconfig.spec.json' : 'tsconfig.app.json',
      inlineStylesExtension: 'css',
    }),
  ],

  server: {
    port: 4200,
    host: '0.0.0.0',
    fs: {
      allow: ['..'],
    },
  },

  preview: {
    port: 4200,
    host: '0.0.0.0',
  },

  build: {
    outDir: 'dist/shoftv-landing',
    emptyOutDir: true,
    target: 'es2022',
    rollupOptions: {
      output: {
        manualChunks: {
          angular: ['@angular/core', '@angular/common', '@angular/platform-browser'],
          router: ['@angular/router'],
          rxjs: ['rxjs'],
        },
      },
    },
    chunkSizeWarningLimit: 1200,
  },

  optimizeDeps: {
    include: [
      '@angular/common',
      '@angular/core',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      '@angular/router',
      'rxjs',
      'rxjs/operators',
    ],
  },

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['src/**/*.spec.ts'],
    reporters: ['default'],
  },
}));
