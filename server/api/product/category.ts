import { redis } from '~~/server/lib/redis';
import prisma from '~~/server/lib/prisma';

export default eventHandler(async () => {
  const cachedValue = await redis.get('category-product');

  if (!cachedValue) {
    const data = await prisma.category_Product.findMany();
    await redis.set('category-product', JSON.stringify(data));
    return data;
  }

  return JSON.parse(cachedValue);
});
