const config = useRuntimeConfig();

export default eventHandler(async (event) => {
  const body = await readBody(event);
  const res = await $fetch<{ data: any; type?: string; status: string }>(
    `${config.baseBackendUrl}api/v1/account/register?format=json`,
    {
      body,
      credentials: 'include',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return res;
});
