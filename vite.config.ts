import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // '/users': 'https://yummy-ghosts-trade.loca.lt',
      // '/upload': 'https://yummy-ghosts-trade.loca.lt',
      // '/images': 'https://yummy-ghosts-trade.loca.lt',

      // '/users': 'http://localhost:8000',
      // '/upload': 'http://localhost:8000',
      // '/images': 'http://localhost:8000',
      // '/defects': 'http://localhost:8000',
      // '/replace-image': 'http://localhost:8000',
      // '/reports': 'http://localhost:8000',

      '/users': 'https://e5a623c77e9b6d79851e25d8f81e7a1a.serveo.net',
      '/upload': 'https://e5a623c77e9b6d79851e25d8f81e7a1a.serveo.net',
      '/images': 'https://e5a623c77e9b6d79851e25d8f81e7a1a.serveo.net',
      '/defects': 'https://e5a623c77e9b6d79851e25d8f81e7a1a.serveo.net',
      '/replace-image': 'https://e5a623c77e9b6d79851e25d8f81e7a1a.serveo.net',
      '/reports': 'https://e5a623c77e9b6d79851e25d8f81e7a1a.serveo.net',
    }
  }
})
