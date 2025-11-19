import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/',   // ← WAJIB sesuai nama repo kamu!
  plugins: [react()],
})

