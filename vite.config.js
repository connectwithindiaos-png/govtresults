import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api/jobs-data': {
        target: 'https://abhishek-kd-43.github.io',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/jobs-data/, '/jobs/data.json'),
      },
    },
  },
})
