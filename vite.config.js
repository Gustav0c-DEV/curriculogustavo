import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Caminhos relativos mantêm os arquivos acessíveis em GitHub Pages e Vercel.
  base: './',
  plugins: [react()],
})
