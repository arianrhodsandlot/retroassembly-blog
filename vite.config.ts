import { createConfig } from '@arianrhodsandlot/vite-plus-config'
import tailwindcss from '@tailwindcss/vite'

export default createConfig({
  plugins: [tailwindcss()],
})
