import prisma from '~~/server/lib/prisma';
import { getServerSession, getToken } from '#auth';

interface BodyType {
  shipping_price: number;
  total_price: number;
  address_id: number;
  status: string;
  items: {
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

  const orderCookie = getCookie(event, 'nuxt.checkout-token');

  if (!body.items.length || !orderCookie)
    return { status: 'error', type: 'error', message: 'Something gone wrong' };

  const order = await prisma.order.create({
    data: {
      user_id: session?.user.id,
      shipping_price: body.shipping_price,
      total_price: body.total_price,
      address_id: body.address_id,
      status: body.status,
    },
  });

  body.items.forEach(async (item) => {
    await prisma.order_Item.create({
      data: {
        user_id: session?.user.id,
        product_id: item.id,
        order_id: order.id,
        quantity: item.quantity,
      },
    });
  });

  return { status: 'success', type: 'success', message: 'Success' };
});
