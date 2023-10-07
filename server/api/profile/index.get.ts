import prisma from '~~/server/lib/prisma';
import { getServerSession, getToken } from '#auth';

export default eventHandler(async (event: any) => {
  const token = await getToken({ event });
  const session = await getServerSession(event as any);

  const user = await prisma.user.findFirst({
    where: {
      email: session?.user?.email as string,
    },
  });

  if (token && session && user) return user;

  return { status: 'error', type: 'error', message: 'Unauthorized' };
});
