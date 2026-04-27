import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: './',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        // Target modern browsers — smaller output
        target: 'es2020',
        // Warn on chunks > 500KB
        chunkSizeWarningLimit: 500,
        // Inline small assets (< 4KB) as base64 to avoid extra HTTP requests
        assetsInlineLimit: 4096,
        // Use esbuild for faster, smaller CSS minification
        cssMinify: 'esbuild',
        // Disable the modulepreload polyfill — not needed for modern browsers.
        // This removes ~1.6KB of polyfill code from the main bundle.
        modulePreload: { polyfill: false },
        rollupOptions: {
          output: {
            // Manual chunk splitting: isolate heavy libs
            manualChunks: {
              // React core — cached separately
              'vendor-react': ['react', 'react-dom', 'react-dom/client'],
              // Motion library — only loaded when needed
              'vendor-motion': ['motion'],
              // UI utilities — small, shared across components
              'vendor-ui': ['lucide-react', 'clsx', 'tailwind-merge'],
            },
            // Content-hash filenames for long-term caching
            entryFileNames: 'assets/[name]-[hash].js',
            chunkFileNames: 'assets/[name]-[hash].js',
            assetFileNames: 'assets/[name]-[hash].[ext]',
          },
        },
        // Enable minification
        minify: 'esbuild',
        // Generate source maps only in development
        sourcemap: mode === 'development',
        // CSS code splitting
        cssCodeSplit: true,
      },
    };
});
