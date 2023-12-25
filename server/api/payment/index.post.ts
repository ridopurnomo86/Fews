import prisma from '~~/server/lib/prisma';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const orderCookie = getCookie(event, 'nuxt.checkout-token') as string;

  if (!body.order_id || !orderCookie)
    return { status: 'error', type: 'error', message: 'Something gone wrong' };

  const order = await prisma.order.findFirst({
    where: {
      order_id: body.order_id as any,
    },
  });

  const updateOrder = await prisma.order.update({
    where: {
      id: order?.id,
    },
    data: {
      status: 'SUCCESS',
    },
  });

  if (updateOrder) {
    setCookie(event, orderCookie, '', { maxAge: 0 });
    deleteCookie(event, orderCookie);
    return { status: 'success', type: 'success', message: 'Success' };
  }

  return { status: 'error', type: 'error', message: 'Something gone wrong' };
});
