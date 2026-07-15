import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Recreate __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'dynamic-prevent-fouc',
      transformIndexHtml(html) {
        // Path to where your theme CSS file is located
        const cssPath = path.resolve(__dirname, 'src/main.css'); 
        let bgColors = {};
        let defaultTheme = 'midnight';

        try {
          if (fs.existsSync(cssPath)) {
            const cssContent = fs.readFileSync(cssPath, 'utf-8');

            // Regex matches: [data-theme="name"] { properties }
            const themeRegex = /\[data-theme=["']([^"']+)["']\]\s*\{([^}]+)\}/g;
            let match;

            while ((match = themeRegex.exec(cssContent)) !== null) {
              const themeName = match[1];
              const themeBody = match[2];

              // Extracts the --bg variable from the matched block
              const bgMatch = themeBody.match(/--bg\s*:\s*([^;}\s]+)/);
              if (bgMatch) {
                bgColors[themeName] = bgMatch[1].trim();
              }
            }

            // Automatically detects the default fallback theme from :root grouping
            const rootMatch = cssContent.match(/:root\s*,\s*\[data-theme=["']([^"']+)["']\]/);
            if (rootMatch) {
              defaultTheme = rootMatch[1];
            }
          }
        } catch (error) {
          console.warn('FOUC Prevention Warning: Could not parse theme CSS.', error);
        }

        // Synchronously execute blocking JS script to set background color before paint
        const foucScript = `
          <script>
            (function() {
              try {
                var bgColors = ${JSON.stringify(bgColors)};
                var defaultTheme = "${defaultTheme}";
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