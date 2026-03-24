import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Replace 'BDRS-insurance' with your exact repo name if it's different
  base: '/BDRS-insurance/', 
})
