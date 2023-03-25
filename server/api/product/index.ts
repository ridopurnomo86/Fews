const config = useRuntimeConfig();

export default eventHandler(async () => {
  const res = await $fetch<{ data: any; type?: string }>(`${config.baseBackendUrl}api/v1/product`);

  return res.data;
});
