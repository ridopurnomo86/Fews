const useAuth = () => {
  let isAuthenticated = false;

  const cookie = useCookie('fews_credential', {
    watch: true,
  }).value;

  if (cookie) {
    isAuthenticated = true;
  }

  return { isAuthenticated };
};

export default useAuth;
