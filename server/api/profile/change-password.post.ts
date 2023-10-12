import prisma from '~~/server/lib/prisma';
import argon2 from 'argon2';
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

  const body = await readBody(event);

  const userEmail = await prisma.user.findFirst({
    where: {
      email: session.user?.id,
    },
  });

  try {
    if (userEmail) {
      const decrypt = await argon2.verify(userEmail.password, body.old_password);
      if (decrypt) {
        const hashPassword = await argon2.hash(body.password);
        await prisma.user.update({
          where: {
            email: session.user?.email as string,
          },
          data: {
            password: hashPassword,
          },
        });
        return { status: 'success', type: 'success', message: 'Change Password Successfully' };
      }
      return { status: 'error', type: 'error', message: 'Wrong Credential' };
    }
    return { status: 'error', type: 'error', message: 'Credential doesnt exist' };
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError)
      return { status: 'error', type: 'error', message: 'Something gone wrong' };
  }

  return null;
});
