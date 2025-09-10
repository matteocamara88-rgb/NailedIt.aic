# Environment Variables Setup for NailedIt.ai

## Required Environment Variables

To enable Stripe payments, you need to configure the following environment variable in your Vercel deployment:

### 1. STRIPE_SECRET_KEY
- **Value**: Your Stripe Secret Key (starts with `sk_live_` for production)
- **Where to get it**: [Stripe Dashboard → API Keys](https://dashboard.stripe.com/apikeys)
- **Security**: ⚠️ Keep this secret! Never commit to version control.

## How to Set Environment Variables in Vercel

### Option 1: Vercel Dashboard (Recommended)
1. Go to your project in [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your project → **Settings** → **Environment Variables**
3. Add the following:
   - **Name**: `STRIPE_SECRET_KEY`
   - **Value**: `sk_live_51Rvvfk09P05WtVy3...` (your actual secret key)
   - **Environment**: Production

### Option 2: Vercel CLI
```bash
vercel env add STRIPE_SECRET_KEY
# Paste your secret key when prompted
```

## Setting Up Stripe Products

Before your Stripe integration works, you need to create products in your Stripe Dashboard:

### 1. Create Products
1. Go to [Stripe Dashboard → Products](https://dashboard.stripe.com/products)
2. Create 3 products:
   - **Basic Plan**: $9.99 (one-time payment)
   - **Pro Plan**: $24.99 (one-time payment)
   - **Unlimited Plan**: $44.99 (one-time payment)

### 2. Get Price IDs
After creating products, copy the Price IDs (starting with `price_`) and update `sales.html`:

```javascript
const priceIds = {
    basic: 'price_1ABC123...', // Replace with your Basic plan Price ID
    pro: 'price_1DEF456...',   // Replace with your Pro plan Price ID
    unlimited: 'price_1GHI789...' // Replace with your Unlimited plan Price ID
};
```

## Testing

1. Deploy to Vercel with environment variables set
2. Visit your sales page
3. Stripe buttons should now create real checkout sessions
4. PayPal continues to work as before

## Security Notes

- ✅ Secret key is stored securely in Vercel environment
- ✅ Frontend only uses publishable key
- ✅ All payments processed through official Stripe/PayPal APIs
- ✅ Credit delivery handled securely via URL parameters
