# HOMIZON - Dubai Home Services Platform

A comprehensive home services marketplace connecting customers with verified service providers across Dubai.

## 🚀 Features

- **Service Marketplace**: AC repair, cleaning, plumbing, electrical, pest control, and more
- **Area Coverage**: All major Dubai areas and neighborhoods
- **Provider Management**: Complete dashboard for service providers
- **Lead Management**: Real-time lead distribution and tracking
- **Notification System**: WhatsApp, SMS, and Email integrations
- **Admin Dashboard**: Comprehensive platform management
- **Mobile Responsive**: Optimized for all devices

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Backend**: Next.js API routes
- **Database**: File-based storage (ready for database upgrade)
- **Deployment**: Vercel-ready

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd homizon
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically deploy your application
4. Add your custom domain in the Vercel dashboard

### Environment Variables

Create a `.env.local` file with:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 📱 Key Pages

- **Homepage**: `/` - Service categories and area selection
- **Service Pages**: `/services/[service]` - Individual service pages
- **Area Pages**: `/areas/[area]` - Location-specific pages
- **Service-Area Pages**: `/[service]/[area]` - Combined service-location pages
- **Admin Dashboard**: `/admin` - Platform management
- **Provider Dashboard**: `/providers/dashboard` - Provider interface
- **Booking**: `/book` - Service booking flow

## 🔧 Configuration

### Notification Settings
Configure WhatsApp, SMS, and Email notifications in:
`/admin/notifications/integrations`

### Content Management
Manage pages, FAQs, and content in:
`/admin/pages`

### Provider Management
Manage service providers in:
`/admin/providers`

## 📊 Analytics Integration

The platform supports:
- Google Analytics 4
- Google Tag Manager
- Google Search Console

Configure in `/admin/analytics-integration`

## 🎨 Design System

- **Colors**: Blue/Purple gradient theme
- **Typography**: Inter font family
- **Components**: shadcn/ui component library
- **Icons**: Lucide React icons
- **Responsive**: Mobile-first design approach

## 🔒 Security Features

- Input validation and sanitization
- CSRF protection
- Rate limiting ready
- Secure API endpoints
- Environment variable protection

## 📈 Performance

- Server-side rendering (SSR)
- Static site generation (SSG) for service/area pages
- Image optimization
- Code splitting
- Lazy loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is proprietary software. All rights reserved.

## 🆘 Support

For support and questions, contact the development team.

---

**Built with ❤️ for Dubai's home services industry**