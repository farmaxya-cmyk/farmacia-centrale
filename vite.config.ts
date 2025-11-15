import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')
  return {
    base: '/farmacia-centrale/', // ✅ nome del repo GitHub Pages
    build: {
      outDir: 'dist' // ✅ cartella di output per GitHub Pages
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY) // ✅ variabile ambientale visibile nel client
    }
  }
})

