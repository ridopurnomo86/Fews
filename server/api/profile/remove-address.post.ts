import prisma from '~~/server/lib/prisma';
import { Prisma } from '@prisma/client';
import { getServerSession, getToken } from '#auth';

export default eventHandler(async (event: any) => {
  const token = await getToken({ event });
  const session: any = await getServerSession(event as any);

  if (!token || !session)
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    });

  const query = getQuery(event);

  try {
    const removeAddress = await prisma.user_Address.delete({
      where: {
        id: Number(query.id),
      },
    });
    if (removeAddress)
      return { status: 'success', type: 'success', message: 'Success Remove address' };
    return { status: 'error', type: 'error', message: 'Wrong Credential' };
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError)
      return { status: 'error', type: 'error', message: 'Something gone wrong' };
    throw e;
  }
});
