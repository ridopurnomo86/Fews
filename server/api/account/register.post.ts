import prisma from '~~/server/lib/prisma';
import argon2 from 'argon2';
import { Prisma } from '@prisma/client';

export default eventHandler(async (event) => {
  const body = await readBody(event);
  const hash = await argon2.hash(body.password);

  try {
    const req = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        phone_number: body.phone_number,
        password: hash,
      },
    });
    if (req) return { status: 'success', type: 'success', message: 'Register Successfully' };
    return { status: 'error', type: 'error', message: 'Something gone wrong' };
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError)
      return { status: 'error', type: 'error', message: 'Something gone wrong' };
  }

  return null;
});
