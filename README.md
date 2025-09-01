# EliteDrive - Premium Car Rental Website

A modern, professional, and mobile-friendly luxury car rental website built with cutting-edge technologies to provide an exceptional user experience.

## 🚗 Features

- **Modern Design**: Sleek, professional UI with glassmorphism effects and smooth animations
- **Responsive Layout**: Fully optimized for desktop, tablet, and mobile devices
- **Luxury Fleet Showcase**: Premium car catalog with high-quality images and detailed specifications
- **Interactive Components**: Smooth animations using Framer Motion
- **SEO Optimized**: Built with Next.js for optimal search engine performance
- **Fast Performance**: Optimized images and modern web technologies
- **Professional Services**: Comprehensive service offerings including airport transfers, chauffeur services, and corporate fleet solutions

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React & Heroicons
- **Fonts**: Inter & Poppins (Google Fonts)
- **Deployment**: Ready for Vercel/Netlify

## 🎨 Design Features

- **Color Palette**: Professional blue and gray tones with accent colors
- **Typography**: Modern font combinations for optimal readability
- **Glassmorphism**: Contemporary glass-like effects for premium feel
- **Micro-interactions**: Subtle animations for enhanced user experience
- **Gradient Backgrounds**: Elegant visual elements throughout

## 📱 Responsive Design

- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly navigation
- Optimized images and performance

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/elitedrive.git
cd elitedrive
```

2. Install dependencies
```bash
npm install
```

3. Copy environment variables (optional)
```bash
cp .env.example .env.local
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Vercel will automatically detect Next.js and configure deployment

2. **Environment Variables**
   - Add your environment variables in Vercel dashboard
   - Configure build settings if needed

3. **Deploy**
   ```bash
   npm run deploy
   ```

### Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy**
   ```bash
   npm run export  # For static export
   ```

### Manual Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm run start
   ```

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run preview` - Build and preview locally
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run deploy` - Deploy to Vercel (production)
- `npm run deploy:staging` - Deploy to Vercel (staging)

## 📁 Project Structure

```
elitedrive/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── FeaturedCars.tsx
│   │   ├── Services.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── lib/
├── public/
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## 🎯 Key Components

### Hero Section
- Stunning full-screen hero with luxury car imagery
- Call-to-action buttons with smooth hover effects
- Trust indicators and floating elements

### Featured Cars
- Premium vehicle showcase with pricing
- Interactive cards with hover animations
- Detailed specifications and ratings

### Services
- Comprehensive service offerings
- Feature highlights with icons
- Professional presentation

### Testimonials
- Customer reviews and ratings
- Social proof elements
- Trust-building content

### Contact Form
- Professional contact form with validation
- Multiple contact methods
- Location information

## 🔧 Customization

### Colors
Modify the color palette in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... other shades
  }
}
```

### Content
Update car listings, services, and testimonials in their respective component files.

### Images
Replace placeholder images in the `public/images/` directory with your actual car photos.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify

## 📈 Performance

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS optimization with Tailwind
- Modern web standards compliance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

Built with ❤️ for luxury car rental businesses

---

**Note**: This is a portfolio project demonstrating modern web development practices. For production use, additional features like authentication, payment processing, and backend integration would be required.
