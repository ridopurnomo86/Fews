const config = useRuntimeConfig();

export default eventHandler(async () => {
  const res = await $fetch(`${config.baseBackendUrl}api/v1/product`);

  return res;
});
