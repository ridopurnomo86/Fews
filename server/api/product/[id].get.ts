const config = useRuntimeConfig();

export default eventHandler(async (event) => {
  const id = event?.context?.params?.id;
  const res = await $fetch<{ data: any; type?: string }>(
    `${config.baseBackendUrl}api/v1/product/${id}`
  );

  return res.data;
});
