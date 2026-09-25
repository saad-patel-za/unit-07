import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('.', import.meta.url));
export default defineConfig({
  root: root + 'pages-preview',
  base: '/unit-07/',
  publicDir: root + 'public',
  plugins: [react()],
  resolve: { alias: { '@': root } },
  define: { 'process.env.NEXT_PUBLIC_ASSET_BASE': JSON.stringify('/unit-07') },
  build: { outDir: root + 'dist-pages', emptyOutDir: true },
});
