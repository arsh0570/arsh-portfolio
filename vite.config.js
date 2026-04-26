import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  base: "/arsh-portfolio/",
  optimizeDeps: {
    include: ['@react-three/drei', '@react-three/fiber', 'three']
  },
  plugins: [
    tailwindcss(),
    react()],
  assetsInclude: ['**/*.glb'],
  
})
