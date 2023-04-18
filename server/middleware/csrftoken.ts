export default defineEventHandler((event) => {
  setCookie(event, 'sessionid', '', {
    maxAge: 0,
  });

  setCookie(event, 'csrftoken', '', {
    maxAge: 0,
  });
});
