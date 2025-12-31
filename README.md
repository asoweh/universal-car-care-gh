# Universal Car Care Website

A clean, static HTML/CSS/JS website for Universal Car Care.

## Structure

```
├── css/
│   ├── main.css              # Main stylesheet (minified)
│   └── inline-styles.css     # Extracted inline styles for reference
├── js/
│   ├── main.js               # Main JavaScript (minified)
│   ├── jquery.min.js         # jQuery 3.5.1
│   └── inline-scripts.js     # Extracted inline scripts for reference
├── images/
│   ├── favicon.ico           # Site favicon
│   ├── logo.png              # Site logo
│   └── [70 other images]     # All images used in the site
├── index.html                # Home page
├── aboutus.html              # About Us page
├── services.html             # Services page
├── contact.html              # Contact page
├── gallery.html              # Gallery page
├── gallery_comp.html         # Gallery comparison page
└── shop.html                 # Shop page
```

## Pages

- **index.html** - Home page with services overview
- **aboutus.html** - About the company
- **services.html** - Detailed services list
- **contact.html** - Contact form and information
- **gallery.html** - Photo gallery
- **gallery_comp.html** - Gallery with comparison feature
- **shop.html** - Products/shop page

## Navigation

All pages maintain consistent navigation links between:
- Home
- About Us
- Services
- Gallery
- Contact Us
- Shop (commented out in some pages)

## Cleanup Performed

### Removed
- WordPress core directories (`wp-content`, `wp-includes`, `wp-json`) - ~200MB
- Unused files (`index-oo.html`, `yymaps.html`, `header_about.txt`)
- RSS feed directory
- Assets directory (17MB) - images not referenced by HTML pages

### Extracted & Organized
- CSS from `wp-content/cache/min/` → `css/main.css`
- JavaScript from `wp-content/cache/min/` → `js/main.js`
- jQuery from `wp-includes/js/jquery/` → `js/jquery.min.js`
- 70 images from `wp-content/uploads/sites/11/` → `images/`

### Cleaned
- Removed WordPress metadata and generator tags
- Removed Yoast SEO comments
- Removed wp-json API references
- Removed RSS feed links
- Updated all asset paths to new structure
- Extracted inline styles and scripts to separate files for reference

## Technical Details

- **Total HTML**: 7 pages (~483KB total)
- **CSS**: 1.1MB (minified)
- **JS**: 900KB (includes jQuery)
- **Images**: 6.3MB (70 files)
- **Total Size**: ~8.3MB (down from ~200MB+)

## Development

This is a static site with no build process required. Simply open any HTML file in a browser or serve with any static web server.

### Serving Locally

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (with http-server)
npx http-server -p 8000
```

Then visit `http://localhost:8000`
