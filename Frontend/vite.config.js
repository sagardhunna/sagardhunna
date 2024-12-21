import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Ensures app works at the root URL
  build: {
    outDir: 'dist', // Ensures Vite outputs to the dist folder
  },
})
