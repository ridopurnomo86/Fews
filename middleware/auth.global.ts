export default defineNuxtRouteMiddleware((to, from) => {
  const cookies = useCookie('fews_cust');

  // if (!cookies.value || cookies.value === undefined)
  //   return navigateTo({ path: '/signin', force: true });

  console.log(to, from, cookies);

  return cookies;
});
