# Wylie Cricket Club Website

[![Deploy to GitHub Pages](https://github.com/manosh27/wyliecricketclub/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/manosh27/wyliecricketclub/actions/workflows/deploy-pages.yml)

A complete website for Wylie Cricket Club featuring modern design, responsive layout, and comprehensive cricket club functionality.

🌐 **Live Website**: [wyliecricketclub.com](https://wyliecricketclub.com) (hosted on GitHub Pages)

## 🏏 Features

- **Responsive Design**: Mobile-first approach with fully responsive layout
- **Modern UI**: Clean, professional design with cricket-themed styling
- **Complete Club Management**: 
  - Homepage with hero section and club overview
  - News and announcements system
  - Player profiles with statistics and team filtering
  - Match schedules, fixtures, and results
  - League information and standings
  - Photo gallery with category filtering
  - Community discussions forum
  - Contact forms with validation
- **Interactive Elements**: Form validation, image lightbox, mobile navigation
- **SEO Optimized**: Meta tags, semantic HTML, and proper structure

## 📁 Site Structure

```
├── index.html          # Homepage
├── news.html           # News & Announcements
├── players.html        # Player Profiles
├── schedule.html       # Schedules & Fixtures
├── league.html         # League Information
├── gallery.html        # Photo Gallery
├── discussions.html    # Community Forum
├── contact.html        # Contact & Forms
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # JavaScript functionality
└── images/             # Image assets directory
```

## 🚀 GitHub Pages Deployment

This website is automatically deployed to GitHub Pages using GitHub Actions. 

**Live URL**: [wyliecricketclub.com](https://wyliecricketclub.com)

### Automatic Deployment
- ✅ Automatic deployment on every push to `main` branch
- ✅ Custom domain configured (wyliecricketclub.com)
- ✅ SSL certificate provided by GitHub Pages
- ✅ CDN distribution for fast global access

### Manual Deployment
You can also trigger deployment manually:
1. Go to the [Actions tab](https://github.com/manosh27/wyliecricketclub/actions)
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

## 🛠️ Alternative Deployment Options

### For wyliecricketclub.com Domain (Alternative Hosting)

1. **Static Hosting Options**:
   - GitHub Pages
   - Netlify
   - Vercel
   - AWS S3 + CloudFront

2. **Domain Configuration**:
   - Point domain to hosting provider
   - Configure SSL certificate
   - Set up redirects if needed

### Quick Deploy with Netlify

1. Connect GitHub repository to Netlify
2. Set build command: `# No build required - static site`
3. Set publish directory: `./`
4. Configure custom domain: `wyliecricketclub.com`

### Quick Deploy with GitHub Pages

1. Go to repository Settings > Pages
2. Select source: Deploy from a branch
3. Choose branch: `main` or deployment branch
4. Configure custom domain

## 🛠️ Local Development

```bash
# Clone the repository
git clone https://github.com/manosh27/wyliecricketclub.git

# Navigate to directory
cd wyliecricketclub

# Start local server (Python)
python3 -m http.server 8000

# Or use Node.js
npx http-server

# Open browser to http://localhost:8000
```

## 📱 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Design Features

- **Color Scheme**: Cricket-themed green (#1a4d2e, #4CAF50)
- **Typography**: Google Fonts (Roboto)
- **Images**: High-quality cricket photos from Unsplash
- **Layout**: CSS Grid and Flexbox for responsive design
- **Animations**: Smooth hover effects and fade-in animations

## 📧 Contact Information

- **Website**: wyliecricketclub.com
- **Email**: info@wyliecricketclub.com
- **Phone**: (972) 555-0123
- **Location**: Wylie Cricket Ground, 123 Sports Lane, Wylie, TX 75098

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on multiple devices/browsers
5. Submit a pull request

## 📄 License

© 2024 Wylie Cricket Club. All rights reserved.

---

Built with ❤️ for the cricket community in Wylie, Texas.
