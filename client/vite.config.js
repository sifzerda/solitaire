import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:3001',
        secure: false,
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: 'client/dist', // Specify the output directory for production builds
    assetsDir: '.', // Specify the assets directory (relative to outDir)
    rollupOptions: {
      // Externalize assets not imported in Vite's build process
      external: ['react', 'react-dom']
    }
  },
  test: {
    environment: 'happy-dom',
    globals: true
  }
});