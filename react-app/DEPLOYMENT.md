# Deployment Guide - Universal Car Care Ghana React App

## Prerequisites

Before deploying, ensure you have:
- Node.js v16 or higher installed
- Git installed
- Access to your chosen hosting platform
- The project built successfully locally

## Build for Production

From the `react-app` directory:

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel offers seamless deployment for React/Vite applications.

1. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

2. **Deploy via CLI**:
   ```bash
   cd react-app
   vercel
   ```

3. **Or Deploy via GitHub**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Set root directory to `react-app`
   - Vercel auto-detects Vite configuration
   - Click "Deploy"

**Configuration**:
- Framework: Vite
- Root Directory: `react-app`
- Build Command: `npm run build`
- Output Directory: `dist`

### Option 2: Netlify

1. **Via Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   cd react-app
   npm run build
   netlify deploy --prod
   ```

2. **Via Netlify Dashboard**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select repository
   - Configure:
     - Base directory: `react-app`
     - Build command: `npm run build`
     - Publish directory: `react-app/dist`
   - Click "Deploy site"

**Netlify Configuration** (`netlify.toml`):
```toml
[build]
  base = "react-app"
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 3: GitHub Pages

1. **Update `vite.config.js`**:
   ```javascript
   export default defineConfig({
     base: '/repository-name/', // Your repo name
     plugins: [react()],
   })
   ```

2. **Install gh-pages**:
   ```bash
   npm install -D gh-pages
   ```

3. **Add deploy script to `package.json`**:
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` → `/root`

### Option 4: Traditional Web Hosting

For traditional hosting (cPanel, FTP, etc.):

1. **Build the project**:
   ```bash
   cd react-app
   npm run build
   ```

2. **Upload files**:
   - Upload all contents of the `dist/` folder to your web server's public directory
   - Ensure `.htaccess` or equivalent is configured for SPA routing

3. **Apache `.htaccess`** (if needed):
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

4. **Nginx configuration**:
   ```nginx
   location / {
     try_files $uri $uri/ /index.html;
   }
   ```

## Post-Deployment Checklist

After deployment, verify:

- [ ] All pages load correctly
- [ ] Navigation works on all pages
- [ ] Forms submit properly
- [ ] Images load correctly
- [ ] Mobile menu functions
- [ ] Gallery lightbox works
- [ ] Contact form validation works
- [ ] All links are functional
- [ ] Favicon displays
- [ ] SEO meta tags are present
- [ ] Site is responsive on mobile devices

## Environment Variables

If you need to add environment variables:

1. Create `.env` file in `react-app/`:
   ```env
   VITE_API_URL=https://api.example.com
   VITE_CONTACT_EMAIL=info@universalcarcaregh.com
   ```

2. Access in code:
   ```javascript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

3. Add to hosting platform's environment variables section

## Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed

### Netlify
1. Go to Domain Settings → Custom domains
2. Add your domain
3. Update DNS records

### DNS Records (typical setup):
```
Type: A
Name: @
Value: [hosting-provider-ip]

Type: CNAME
Name: www
Value: [your-deployment-url]
```

## SSL/HTTPS

Most modern hosting platforms (Vercel, Netlify) provide automatic SSL.

For traditional hosting:
- Use Let's Encrypt (free)
- Enable SSL in cPanel or hosting control panel
- Force HTTPS in `.htaccess`:
  ```apache
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  ```

## Performance Optimization

After deployment:

1. **Enable Gzip/Brotli compression** on server
2. **Set caching headers** for static assets
3. **Use CDN** if available (Cloudflare, etc.)
4. **Monitor performance** with Google PageSpeed Insights
5. **Enable HTTP/2** on server

## Continuous Deployment

For automatic deployments:

**Vercel/Netlify**:
- Automatically deploys on `git push` to main branch
- Configure production branch in settings

**GitHub Actions** (example):
```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install and Build
        run: |
          cd react-app
          npm install
          npm run build
      - name: Deploy
        run: # Your deployment command
```

## Troubleshooting

**404 on page refresh**:
- Configure server for SPA routing (see above)
- Ensure `base` is correct in `vite.config.js`

**Assets not loading**:
- Check asset paths (should be relative or use `/` prefix)
- Verify `base` configuration in Vite

**Build fails**:
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version compatibility
- Review build logs for specific errors

## Support

For deployment issues:
- Check hosting platform documentation
- Review Vite deployment guide: https://vitejs.dev/guide/static-deploy
- Contact: info@universalcarcaregh.com

## Updates

To update the deployed site:

1. Make changes locally
2. Test thoroughly
3. Commit and push to repository
4. For manual deployments: `npm run build` and upload
5. For automatic deployments: Changes deploy automatically

---

**Last Updated**: December 2024
**Version**: 1.0.0
