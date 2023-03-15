const config = useRuntimeConfig();

export default eventHandler(async () => {
  const res = await $fetch<{ data: any; type?: string; status: string }>(
    `${config.baseBackendUrl}api/v1/account/logout?format=json`,
    {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json, text/plain, */*',
      },
    }
  );

  return res;
});
