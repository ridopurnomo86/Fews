import Stripe from 'stripe';
import { getServerSession, getToken } from '#auth';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {} as Stripe.StripeConfig);
  const token = await getToken({ event });
  const session: any = await getServerSession(event as any);

  if (!token || !session)
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    });

  const paymentIntents = await stripe.paymentIntents.create({
    amount: Number(body.amount),
    currency: 'usd',
    automatic_payment_methods: { enabled: true },
  });

  if (!paymentIntents) return { status: 'error', type: 'error', message: 'Something gone wrong' };

  return paymentIntents;
});
