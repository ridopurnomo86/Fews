export default defineNuxtRouteMiddleware((to) => {
  const cookies = useCookie('nuxt.checkout-token').value;

  if (!cookies) abortNavigation();

  if ((cookies && to.path !== '/order') || (cookies && to.path !== '/order/payment'))
    navigateTo('/', { redirectCode: 301 });
});
