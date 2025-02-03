import { defineConfig, ConfigEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }: ConfigEnv) => {
  const isProduction = mode === 'production';
  const base = isProduction ? '/tanawitch.github.io/' : '/';

  return {
    base,
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: true,
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html')
        },
      },
    },
    server: {
      host: true,  // Listen on all addresses
      port: 8080,
      open: true,  // Automatically open browser
      strictPort: true,
    },
    preview: {
      port: 8080,
    }
  };
});