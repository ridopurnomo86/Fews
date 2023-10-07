import prisma from '~~/server/lib/prisma';
import argon2 from 'argon2';
import { Prisma } from '@prisma/client';

export default eventHandler(async (event) => {
  const body = await readBody(event);

  const userEmail = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  try {
    if (userEmail) {
      const decrypt = await argon2.verify(userEmail.password, body.password);
      if (decrypt) return userEmail;
      return { status: 'error', type: 'error', message: 'Wrong Credential' };
    }
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError)
      return { status: 'error', type: 'error', message: 'Something gone wrong' };
  }

  return null;
});
