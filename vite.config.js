import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const allowedNgrokHosts = ['.ngrok.io', '.ngrok-free.app', '.ngrok.app', 'ngrok.io']

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: allowedNgrokHosts,
  },
  preview: {
    host: true,
    allowedHosts: allowedNgrokHosts,
  },
})
