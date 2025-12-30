# Universal Car Care Ghana - React Application

A modern, responsive React application for Universal Car Care Ghana, converted from the original WordPress website.

## 🚀 Features

- **Modern React Stack**: Built with React 18 and Vite for fast performance
- **Responsive Design**: Fully responsive using Tailwind CSS
- **Smooth Navigation**: React Router for seamless page transitions
- **Interactive Components**: Hero sliders, image galleries with lightbox, and interactive forms
- **Form Validation**: Contact forms with React Hook Form validation
- **Animations**: Smooth animations using Framer Motion and Swiper

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd universal-car-care-gh/react-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 🗂️ Project Structure

```
react-app/
├── public/                 # Static assets
│   ├── uploads/           # Images from original site
│   └── assets/            # Fonts and icons
├── src/
│   ├── components/        # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx
│   │   ├── GalleryCompleted.jsx
│   │   └── Contact.jsx
│   ├── context/           # Context providers
│   │   └── AppContext.jsx
│   ├── data/              # Data files
│   │   ├── constants.js
│   │   └── services.js
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── tailwind.config.js     # Tailwind configuration
├── vite.config.js         # Vite configuration
└── package.json           # Dependencies
```

## 🎨 Key Technologies

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **React Router DOM**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Swiper**: Touch slider for hero carousel
- **React Hook Form**: Form state management and validation
- **Framer Motion**: Animation library
- **Headless UI**: Accessible UI components

## 🌐 Routes

- `/` - Home page
- `/about` - About Us page
- `/services` - Services page
- `/gallery` - Gallery page
- `/gallery-completed` - Completed projects gallery
- `/contact` - Contact page with form

## 📱 Contact Information

- **Address**: 2 Boundary Rd N, Tema New Town
- **Phone**: +233-24-111-4111
- **Email**: info@universalcarcaregh.com
- **Hours**: 
  - Mon-Fri: 8:00 AM - 5:00 PM
  - Sat: 9:00 AM - 3:00 PM
  - Sunday: Closed

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.js` to customize colors:

```javascript
colors: {
  'custom-red': '#e31e24',    // Primary brand color
  'custom-dark': '#1a1a1a',   // Dark text color
  'custom-gray': '#f5f5f5',   // Light background
}
```

### Services Data

Update services in `src/data/services.js`

### Contact Information

Update contact details in `src/data/constants.js`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 Features Overview

### Header Component
- Sticky header with scroll behavior
- Top bar with contact information
- Responsive mobile menu
- Desktop navigation

### Footer Component
- Contact information
- Opening hours
- Quick links
- Social media links
- Back to top button

### Home Page
- Hero slider with Swiper
- Welcome section
- Featured services
- Call-to-action sections

### About Page
- Company information
- Mission, vision, and values
- Service advantages

### Services Page
- Service cards grid
- Detailed service list
- Why choose us section

### Gallery Pages
- Image grid layout
- Lightbox functionality
- Responsive design

### Contact Page
- Contact form with validation
- Contact information sidebar
- Map placeholder

## 🚀 Deployment

This application can be deployed to various platforms:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### GitHub Pages
1. Update `vite.config.js` with base URL
2. Run `npm run build`
3. Deploy the `dist` folder

## 📄 License

© 2024 Universal Car Care Ghana. All rights reserved.

## 🤝 Contributing

For contributions, please contact the development team.

## 📞 Support

For technical support or questions:
- Email: info@universalcarcaregh.com
- Phone: +233-24-111-4111
