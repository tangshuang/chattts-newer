import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import commonjs from 'vite-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    commonjs(),
  ],
  base: './',
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:12588',
        changeOrigin: true,
        secure: false,
      },
      '/static': {
        target: 'http://127.0.0.1:12588',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
