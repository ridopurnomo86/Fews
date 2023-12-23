import prisma from '~~/server/lib/prisma';
import { getServerSession, getToken } from '#auth';

const findProduct = async (orderId: number) => {
  const items = await prisma.order_Item.findMany({
    where: {
      order_id: orderId,
    },
    orderBy: {
      id: 'asc',
    },
    include: {
      Product: {
        include: {
          Category_Product: true,
        },
      },
    },
  });

  if (!items || items === null)
    throw createError({
      statusCode: 500,
      statusMessage: 'Something gone wrong',
    });

  return items;
};

export default eventHandler(async (event) => {
  const query = getQuery(event);
  const token = await getToken({ event });
  const session: any = await getServerSession(event as any);

  if (!token || !session)
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    });

  const orders = await prisma.order.findMany({
    where: {
      user_id: session.user?.id,
      ...(query.type === 'pending' && { status: 'PENDING' }),
      ...(query.type === 'success' && { status: 'SUCCESS' }),
    },
    take: 5,
    orderBy: {
      id: 'desc',
    },
  });

  const data = await Promise.all(
    orders.map(async (item) => {
      const items = await findProduct(item.id);

      return { ...item, items };
    })
  );

  if (!orders || orders.length === 0) return { type: 'success', status: 'success', data: [] };

  return { type: 'success', status: 'success', data };
});
