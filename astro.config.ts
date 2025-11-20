import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://blog.retroassembly.com',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
})
