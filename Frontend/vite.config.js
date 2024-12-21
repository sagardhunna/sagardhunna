import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // This ensures that routing works correctly on the deployed site
  build: {
    outDir: 'dist', // Ensures that the build output goes to the dist directory
  },
})
