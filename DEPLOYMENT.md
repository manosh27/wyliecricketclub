# Deployment Instructions for wyliecricketclub.com

## Option 1: GitHub Pages (Recommended for simplicity)

1. **Enable GitHub Pages**:
   - Go to repository Settings > Pages
   - Source: Deploy from a branch
   - Branch: Select your main branch
   - Folder: / (root)

2. **Configure Custom Domain**:
   - In Pages settings, add custom domain: `wyliecricketclub.com`
   - Create CNAME file in repository root with domain name
   - Update DNS records with your domain registrar:
     ```
     Type: CNAME
     Name: www
     Value: manosh27.github.io
     
     Type: A (for apex domain)
     Name: @
     Values: 
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

## Option 2: Netlify (Recommended for features)

1. **Deploy to Netlify**:
   - Connect GitHub repository to Netlify
   - Build command: (leave empty)
   - Publish directory: `/`
   - Auto-deploy on commits

2. **Configure Domain**:
   - Go to Domain settings in Netlify
   - Add custom domain: `wyliecricketclub.com`
   - Update DNS with your registrar to point to Netlify

## Option 3: Vercel

1. **Deploy to Vercel**:
   - Import GitHub repository
   - Framework preset: Other
   - Build command: (leave empty)
   - Output directory: (leave empty)

2. **Add Custom Domain**:
   - Go to Project Settings > Domains
   - Add `wyliecricketclub.com`

## DNS Configuration

For any hosting option, configure these DNS records with your domain registrar:

```
# For Netlify
Type: CNAME
Name: www
Value: [your-netlify-subdomain].netlify.app

Type: A (apex domain)
Name: @
Value: [Netlify's IP addresses]

# For GitHub Pages
Type: CNAME
Name: www
Value: manosh27.github.io

Type: A (apex domain)
Name: @
Values: GitHub Pages IPs (see above)

# For Vercel
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A (apex domain)
Name: @
Value: 76.76.19.61
```

## SSL Certificate

All recommended hosting providers (GitHub Pages, Netlify, Vercel) provide free SSL certificates automatically for custom domains.

## Performance Optimization

The website is already optimized for performance:
- ✅ Minified CSS and optimized images
- ✅ Mobile-first responsive design
- ✅ Lazy loading for images
- ✅ Efficient font loading from Google Fonts
- ✅ Optimized asset delivery

## Monitoring

Consider adding:
- Google Analytics for traffic monitoring
- Search Console for SEO monitoring
- Uptime monitoring for availability

## Content Updates

The website is built with static HTML/CSS/JS, making it easy to update:
1. Edit files directly in GitHub
2. Changes auto-deploy through hosting provider
3. No server maintenance required

## Support

For technical issues with deployment:
- GitHub Pages: GitHub Support
- Netlify: Netlify Support
- Vercel: Vercel Support

For website content updates, contact the repository maintainer.