import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import projectDir from './dir.js';

const root = path.resolve(projectDir, "src");

const outDir = path.resolve(projectDir, "dist");

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(root, "index.html"),
        about: path.resolve(root, "About", "index.html")
      }
    }
  }
});
