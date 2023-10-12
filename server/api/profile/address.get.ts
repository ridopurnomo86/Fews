import prisma from '~~/server/lib/prisma';
import { getServerSession, getToken } from '#auth';

export default eventHandler(async (event) => {
  const token = await getToken({ event });
  const session: any = await getServerSession(event as any);

  if (!token || !session)
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    });

  const addresses = await prisma.user_Address.findMany({
    where: {
      user_id: session.user.id,
    },
  });

  if (!addresses || addresses.length === 0) return { type: 'success', status: 'success', data: [] };

  return { type: 'success', status: 'success', data: addresses };
});
