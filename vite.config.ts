/* eslint-disable import/no-extraneous-dependencies */
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
      '@context': '/src/context',
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
