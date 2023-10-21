import Stripe from 'stripe';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {} as Stripe.StripeConfig);

  const connection = await stripe.paymentIntents.create({
    amount: Number(body.amount),
    currency: 'usd',
    automatic_payment_methods: { enabled: true },
  });

  if (!connection) return { status: 'error', type: 'error', message: 'Something gone wrong' };

  return connection;
});
