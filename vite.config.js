import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
  },

  build: {
    chunkSizeWarningLimit: 1500,
    reportCompressedSize: false,
    emptyOutDir: true,
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return
        warn(warning)
      },
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          tailwind: ['tailwindcss'],
        }
      }
    }
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'tailwindcss'
    ],
    exclude: ['@rollup/rollup-linux-x64-gnu']
  }
});

