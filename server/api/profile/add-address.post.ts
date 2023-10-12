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

  const body = await readBody(event);

  try {
    const createAddress = await prisma.user_Address.create({
      data: {
        address_name: body.address_name,
        city: body.city,
        country: body.country,
        label: body.label,
        note: body.note,
        phone_number: body.phone_number,
        recepient_name: body.recepient_name,
        state: body.state,
        user_id: session.user?.id,
        zip_code: body.zip_code,
        langitude: '',
        longitude: '',
      },
    });
    if (createAddress)
      return { status: 'success', type: 'success', message: 'Success add address' };
    return { status: 'error', type: 'error', message: 'Wrong Credential' };
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError)
      return { status: 'error', type: 'error', message: 'Something gone wrong' };
    throw e;
  }
});
