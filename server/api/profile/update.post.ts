import prisma from '~~/server/lib/prisma';
import { getServerSession, getToken } from '#auth';

export default eventHandler(async (event: any) => {
  const token = await getToken({ event });
  const session = await getServerSession(event as any);

  if (!token || !session)
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    });

  const body = await readBody(event);

  const user = await prisma.user.update({
    where: {
      email: session?.user?.email as string,
    },
    data: {
      birth_date: body.birth_date,
      gender: body.gender,
      full_name: body.full_name,
    },
  });

  if (user) return { status: 'success', type: 'success', message: 'Success Update Profile' };

  throw createError({
    statusCode: 500,
    statusMessage: 'Something gone wrong',
    data: {
      type: 'error',
      status: 'error',
      message: 'something gone wrong',
    },
  });
});
