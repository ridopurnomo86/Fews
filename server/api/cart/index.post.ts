import prisma from '~~/server/lib/prisma';
import { getServerSession, getToken } from '#auth';

interface BodyTypes {
  amount: number;
  items: {
    id: number;
    name: string;
    type_id: number;
    category_id: number;
  }[];
}

const checkingProduct = async (productId: number) => {
  const findProduct = await prisma.product.findFirst({
    where: {
      id: productId,
    },
  });

  if (!findProduct || findProduct === null) return false;

  return true;
};

export default defineEventHandler(async (event) => {
  const token = await getToken({ event });
  const session: any = await getServerSession(event as any);

  if (!token || !session)
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    });

  const body: BodyTypes = await readBody(event);

  const checkingAllItems: boolean[] = await Promise.all(
    body.items.map(async (item) => {
      const product = await checkingProduct(item.id);
      return product;
    })
  );

  if (checkingAllItems && checkingAllItems.includes(true))
    return { status: 'success', type: 'success', message: 'Success' };

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
