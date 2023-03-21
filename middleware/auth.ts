// @ts-ignore
export default defineNuxtRouteMiddleware((to) => {
  const config = useRuntimeConfig();
  const abortLink = ['/signin', '/signup', '/set-password', '/forgot-password'];

  const cookie = useCookie(config.authSession).value;

  if (!cookie && !abortLink.includes(to.fullPath))
    return navigateTo({ path: '/signin', force: true, replace: true });

  if (cookie && abortLink.includes(to.fullPath))
    return navigateTo({ path: '/', force: true, replace: true });

  return null;
});
