import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const getAliasPath = (path) => {
  return fileURLToPath(new URL(path, import.meta.url));
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': getAliasPath('./src'),
      '@style': getAliasPath('./style'),
    }
  }
})
