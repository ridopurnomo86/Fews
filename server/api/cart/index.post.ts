import prisma from '~~/server/lib/prisma';
import { encryptHandler } from '~~/server/lib/encryption';
import { tokenCreateHandler } from '~~/server/lib/token';
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

  if (!token || !session) await sendRedirect(event, '/signin', 302);

  const body: BodyTypes = await readBody(event);

  const checkingAllItems: boolean[] = await Promise.all(
    body.items.map(async (item) => {
      const product = await checkingProduct(item.id);
      return product;
    })
  );

  if (checkingAllItems && checkingAllItems.includes(true)) {
    const orderToken = tokenCreateHandler({ id: session?.user.id, hasAccess: true });

    const encryptToken = encryptHandler(orderToken);

    setCookie(event, 'nuxt.checkout-token', encryptToken);

    return {
      status: 'success',
      type: 'success',
      message: 'Success',
      data: { token: encryptToken },
    };
  }

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
