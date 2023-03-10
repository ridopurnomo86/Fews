// @ts-ignore
export default defineNuxtRouteMiddleware((to) => {
  const abortLink = ['/signin', '/signup'];

  const cookie = useCookie('fews_credential').value;

  if (!cookie && !abortLink.includes(to.fullPath))
    return navigateTo({ path: '/signin', force: true, replace: true });

  if (cookie && abortLink.includes(to.fullPath))
    return navigateTo({ path: '/', force: true, replace: true });

  return null;
});
