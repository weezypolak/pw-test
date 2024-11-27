import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'weezypolak.github.io/pw-test/', // Replace <repo-name> with your repository name
});
