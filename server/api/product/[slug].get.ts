import { redis } from '~~/server/lib/redis';
import prisma from '~~/server/lib/prisma';

export default eventHandler(async (event) => {
  const slug = event?.context?.params?.slug;

  const cachedValue = await redis.get(`product-${slug}`);

  if (!cachedValue) {
    const data = await prisma.product.findFirst({
      where: {
        slug,
      },
      include: {
        Type_Product: true,
        Category_Product: true,
      },
    });

    await redis.set(`product-${slug}`, JSON.stringify(data));
    return data;
  }

  return JSON.parse(cachedValue);
});
