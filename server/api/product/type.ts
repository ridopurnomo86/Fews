import { redis } from '~~/server/lib/redis';
import prisma from '~~/server/lib/prisma';

export default eventHandler(async () => {
  const cachedValue = await redis.get('type-product');

  if (!cachedValue) {
    const data = await prisma.type_Product.findMany();
    await redis.set('type-product', JSON.stringify(data));
    return data;
  }

  return JSON.parse(cachedValue);
});
