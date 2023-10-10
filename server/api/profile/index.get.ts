import prisma from '~~/server/lib/prisma';
import { getServerSession, getToken } from '#auth';

export default eventHandler(async (event: any) => {
  const token = await getToken({ event });
  const session: any = await getServerSession(event as any);

  if (!token || !session)
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    });

  const user = await prisma.user.findFirst({
    where: {
      id: session?.user.id,
    },
  });

  if (token && session && user) return user;

  return { status: 'error', type: 'error', message: 'Unauthorized' };
});
