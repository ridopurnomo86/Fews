import { CategoryProductDataType } from '~~/types/product';

const config = useRuntimeConfig();

export default eventHandler(async () => {
  const res = await $fetch<{ data: CategoryProductDataType[]; type?: string }>(
    `${config.baseBackendUrl}api/v1/product/category`
  );

  return res.data;
});
