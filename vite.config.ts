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
    // Force correct MIME types for modules
    {
      name: 'configure-mime-types',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url?.endsWith('.js') || req.url?.endsWith('.mjs')) {
            res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
          } else if (req.url?.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css; charset=utf-8');
          }
          next();
        });
      },
      configurePreviewServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url?.endsWith('.js') || req.url?.endsWith('.mjs')) {
            res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
          } else if (req.url?.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css; charset=utf-8');
          }
          next();
        });
      },
    },
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
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: {
          angular: ['@angular/core', '@angular/common', '@angular/platform-browser'],
          router: ['@angular/router'],
          rxjs: ['rxjs'],
        },
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return `assets/[name]-[hash][extname]`;
          
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
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
