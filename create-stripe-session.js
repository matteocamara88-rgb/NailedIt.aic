// Vercel Serverless Function
// This is our secure backend endpoint.

// Import the official Stripe library
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  // We only accept POST requests to this endpoint
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { plan, priceId } = req.body;

    if (!plan || !priceId) {
      return res.status(400).json({ error: 'Plan and Price ID are required.' });
    }

    const YOUR_DOMAIN = 'https://nailed-it-aiif.vercel.app'; // Your live Vercel domain

    // Create a Checkout Session with Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      // On success, Stripe will redirect the user to your thank you page.
      // We pass the plan details in the URL so the thank you page knows what was purchased.
      success_url: `${YOUR_DOMAIN}/thankyou.html?plan=${plan}&credits=${getCreditsForPlan(plan)}&order={CHECKOUT_SESSION_ID}`,
      // If the user cancels, they are sent back to the sales page.
      cancel_url: `${YOUR_DOMAIN}/sales.html`,
    });

    // Send the session ID back to the frontend
    res.status(200).json({ id: session.id });

  } catch (err) {
    console.error('Stripe Error:', err.message);
    res.status(500).json({ error: 'An error occurred with our payment processor. Please try again.' });
  }
};

// Helper function to determine credits based on the plan name
function getCreditsForPlan(plan) {
    switch (plan) {
        case 'basic': return 50;
        case 'pro': return 200;
        case 'unlimited': return 999999;
        default: return 0;
    }
}
