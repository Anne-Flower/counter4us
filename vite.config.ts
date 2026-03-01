import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      includeAssets: ['favicon.ico', 'tiger.jpeg'],
      manifest: {
        name: 'counter4us',
        short_name: 'counter',
        description: 'An amazing counter',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'tiger.jpeg',
            sizes: '192x192',
            type: 'image/jpeg',
          },
          {
            src: 'tiger.jpeg',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
    tailwindcss(),
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
