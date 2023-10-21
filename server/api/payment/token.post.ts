import jwt from 'jsonwebtoken';
import crypto from 'crypto-js';
import { getServerSession, getToken } from '#auth';

const CRYPTO_SECRET = process.env.CRYPTO_SECRET as string;

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const token = await getToken({ event });
  const session: any = await getServerSession(event as any);

  //   const decipher = crypto.createDecipheriv(algorithm, securityKey, initVector);

  if (!token || !session)
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    });

  const paymentToken = jwt.sign({ id: session?.user.id, hasAccess: true }, config.jwtSecret);

  const encryptToken = crypto.HmacSHA256(paymentToken, CRYPTO_SECRET).toString();

  return { status: 'success', type: 'success', data: { token: encryptToken } };
});
