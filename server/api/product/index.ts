import { PrismaClient } from '@prisma/client';
import { redis } from '~~/server/lib/redis';

export default eventHandler(async () => {
  const prisma = new PrismaClient();

  const cachedValue = await redis.get('products');

  if (!cachedValue) {
    const data = await prisma.product.findMany({
      include: {
        Type_Product: true,
        Category_Product: true,
      },
    });
    await redis.set('products', JSON.stringify(data));
    return data;
  }

  return JSON.parse(cachedValue);
});
