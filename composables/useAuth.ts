const useAuth = () => {
  const config = useRuntimeConfig();
  let isAuthenticated = false;

  const cookie = useCookie(config.authSession, {
    watch: true,
  }).value;

  if (cookie) {
    isAuthenticated = true;
  }

  return { isAuthenticated };
};

export default useAuth;
