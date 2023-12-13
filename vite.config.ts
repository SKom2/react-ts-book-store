/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@pages': '/src/pages',
      '@components': '/src/components',
      '@data': '/src/data',
      '@types': '/src/types',
      '@hooks': '/src/hooks',
      '@assets': '/src/assets',
      '@images': '/src/assets/images',
      '@styles': '/src/assets/styles',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
});
