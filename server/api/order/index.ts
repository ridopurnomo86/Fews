import { Prisma } from '@prisma/client';
import prisma from '~~/server/lib/prisma';
import { getServerSession, getToken } from '#auth';

interface BodyType {
  shipping_price: number;
  total_price: number;
  address_id: number;
  products: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }[];
}

export default eventHandler(async (event: any) => {
  const token = await getToken({ event });
  const session: any = await getServerSession(event as any);

  const body: BodyType = await readBody(event);

  if (!token || !session)
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    });

  try {
    if (!body.products.length)
      return { status: 'error', type: 'error', message: 'Something gone wrong' };

    const order = await prisma.order.create({
      data: {
        user_id: session?.user.id,
        shipping_price: body.shipping_price,
        total_price: body.total_price,
        address_id: body.address_id,
      },
    });

    body.products.forEach(async (item) => {
      await prisma.order_Item.create({
        data: {
          user_id: session?.user.id,
          product_id: item.id,
          order_id: order.id,
          quantity: item.quantity,
        },
      });
    });
    return { status: 'success', type: 'success', message: 'Change Password Successfully' };
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError)
      return { status: 'error', type: 'error', message: 'Something gone wrong' };
  }

  return null;
});
