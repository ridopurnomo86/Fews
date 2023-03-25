import { TypesProductDataType } from '~~/types/product';

const config = useRuntimeConfig();

export default eventHandler(async () => {
  const res = await $fetch<{ data: TypesProductDataType[]; type?: string }>(
    `${config.baseBackendUrl}api/v1/product/type`
  );

  return res.data;
});
