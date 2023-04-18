const config = useRuntimeConfig();

export default eventHandler(async (event) => {
  const body = await readBody(event);
  const res = await $fetch<{ data: any; type?: string; status: string }>(
    `${config.baseBackendUrl}api/v1/account/google/set`,
    {
      body,
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json, text/plain, */*',
        Cookie: event.req.rawHeaders[1],
      },
    }
  );

  setCookie(event, config.googleSession, '', {
    httpOnly: true,
    maxAge: 0,
  });

  return res;
});
