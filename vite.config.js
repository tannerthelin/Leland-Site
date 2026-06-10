import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { readFileSync, writeFileSync } from 'fs'

function spa404Plugin() {
  return {
    name: 'spa-404',
    closeBundle() {
      const out = resolve('dist', 'index.html')
      writeFileSync(resolve('dist', '404.html'), readFileSync(out))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), spa404Plugin()],
  base: '/Leland-Site/',
})
