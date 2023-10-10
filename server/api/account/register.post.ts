import prisma from '~~/server/lib/prisma';
import argon2 from 'argon2';
import { Prisma } from '@prisma/client';

export default eventHandler(async (event) => {
  const body = await readBody(event);
  const hash = await argon2.hash(body.password);

  try {
    const create = await prisma.user.create({
      data: {
        full_name: body.full_name,
        email: body.email,
        phone_number: body.phone_number,
        password: hash,
      },
    });
    if (create) return { status: 'success', type: 'success', message: 'Register Successfully' };
    return { status: 'error', type: 'error', message: 'Sorry, email is exist' };
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2002')
      return {
        status: 'error',
        type: 'error',
        message: 'A new user cannot be created with this email',
      };
    throw e;
  }
});
