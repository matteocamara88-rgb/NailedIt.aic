# NailedIt.ai - AI YouTube Thumbnail Generator

A complete AI-powered YouTube thumbnail generation service with payment processing, built with vanilla HTML, CSS, and JavaScript.

## Features

- **AI Thumbnail Generation**: Create eye-catching YouTube thumbnails using Google Gemini AI
- **Multiple Image Upload**: Upload up to 5 images with custom context for each
- **Text Overlay**: Add custom text overlays to thumbnails
- **Payment Processing**: Integrated PayPal and Stripe payments
- **Credit System**: Track and manage user credits
- **Responsive Design**: Works perfectly on desktop and mobile
- **Security Features**: Rate limiting, input validation, and error handling

## File Structure

```
├── index.html          # Main AI thumbnail generator
├── sales.html          # Sales/pricing page
├── thankyou.html       # Thank you page after payment
├── privacy.html        # Privacy policy
├── terms.html          # Terms of service
├── vercel.json         # Vercel deployment configuration
└── README.md           # This file
```

## Deployment

### Vercel (Recommended)

1. **Create a new repository** on GitHub
2. **Upload all files** to the repository
3. **Go to Vercel.com** and sign up/login
4. **Import your GitHub repository**
5. **Framework Preset**: Select "Other"
6. **Deploy** - Your site will be live in 2 minutes!

### GitHub Pages

1. **Create a new repository** on GitHub
2. **Upload all files** to the repository
3. **Go to Settings** → **Pages**
4. **Source**: Deploy from a branch
5. **Branch**: main
6. **Save** - Your site will be live at `https://username.github.io/repository-name`

## Configuration

### API Keys

The app is pre-configured with:
- **Google Gemini API Key**: Already included
- **PayPal Client ID**: Already included
- **Stripe Publishable Key**: Already included

### Payment Processing

- **PayPal**: Production-ready with your client ID
- **Stripe**: Test mode with confirmation dialogs
- **Both redirect** to thank you page after successful payment

## Pricing

- **Basic**: $9.99/month → 50 credits
- **Pro**: $24.99/month → 200 credits
- **Unlimited**: $49.99/month → Unlimited credits

## Security Features

- **Rate Limiting**: Max 10 generations per minute
- **Input Validation**: Character limits and file type checking
- **Credit Validation**: Prevents credit manipulation
- **Error Handling**: Comprehensive error messages
- **HTTPS**: Automatic SSL encryption

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## License

This project is proprietary software. All rights reserved.

## Support

For support, email: support@nailedit.ai
