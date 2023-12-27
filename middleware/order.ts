export default defineNuxtRouteMiddleware((to) => {
  if (process.server || process.client) {
    const cookies = useCookie('nuxt.checkout-token').value;

    if (!cookies) return abortNavigation();

    if (
      (cookies && to.path !== '/order') ||
      (cookies && to.path !== '/order/payment') ||
      (cookies && to.path !== '/order/success')
    ) {
      navigateTo('/', { redirectCode: 301 });
    }
  }

  return null;
});
