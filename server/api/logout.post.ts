const config = useRuntimeConfig();

export default eventHandler(async (event) => {
  const res = await $fetch<{ data: any; type?: string; status: string }>(
    `${config.baseBackendUrl}api/v1/account/logout?format=json`,
    {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json, text/plain, */*',
        Cookie: event.req.rawHeaders[1],
      },
    }
  );

  setCookie(event, 'fews_cust', '', {
    httpOnly: true,
    maxAge: 0,
  });

  return res;
});
