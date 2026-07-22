import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'dynamic-prevent-fouc',
      transformIndexHtml(html) {
        const cssPath = path.resolve(__dirname, 'src/main.css');
        let bgColors = {};

        try {
          if (fs.existsSync(cssPath)) {
            const cssContent = fs.readFileSync(cssPath, 'utf-8');

            const themeRegex = /\[data-theme=["']([^"']+)["']\]\s*\{([^}]+)\}/g;
            let match;

            while ((match = themeRegex.exec(cssContent)) !== null) {
              const themeName = match[1];
              const themeBody = match[2];

              const bgMatch = themeBody.match(/--bg\s*:\s*([^;}\s]+)/);
              if (bgMatch) {
                bgColors[themeName] = bgMatch[1].trim();
              }
            }

            const rootMatch = cssContent.match(/:root[^{]*\{([^}]+)\}/);
            if (rootMatch) {
              const rootBgMatch = rootMatch[1].match(/--bg\s*:\s*([^;}\s]+)/);
              if (rootBgMatch && !bgColors['light']) {
                bgColors['light'] = rootBgMatch[1].trim();
              }
            }
          }
        } catch (error) {
          console.warn('FOUC Prevention Warning: Could not parse theme CSS.', error);
        }

        const foucScript = `
          <script>
            (function() {
              try {
                var bgColors = ${JSON.stringify(bgColors)};
                var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                var defaultTheme = prefersDark ? 'slate' : 'light';
                var theme = localStorage.getItem('app-theme') || defaultTheme;
                
                document.documentElement.setAttribute('data-theme', theme);
                if (bgColors[theme]) {
                  document.documentElement.style.backgroundColor = bgColors[theme];
                }
              } catch (e) {}
            })();
          </script>
        `;

        return html.replace('<head>', '<head>' + foucScript);
      }
    }
  ]
});