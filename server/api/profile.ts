const config = useRuntimeConfig();

export default eventHandler(async (event) => {
  const res = await $fetch<{ data: any; type?: string }>(
    `${config.baseBackendUrl}api/v1/user/profile`,
    {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Cookie: event.req.rawHeaders[1],
      },
    }
  );

  return res;
});
