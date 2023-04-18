import { useToast } from 'tailvue';
import {
  useTokenClient,
  type AuthCodeFlowSuccessResponse,
  type AuthCodeFlowErrorResponse,
} from 'vue3-google-signin';

const config = useRuntimeConfig();

const useAuthGoogle = () => {
  const $toast = useToast();
  const isLoading = ref<boolean>(false);
  const cookie = useCookie(config.authSession, {
    maxAge: 18000,
  });

  const handleOnSuccess = async (response: AuthCodeFlowSuccessResponse) => {
    isLoading.value = true;

    if (response.access_token) {
      const { data, error }: any = await useFetch(
        `${config.baseBackendUrl}api/v1/account/google/login`,
        {
          body: JSON.stringify({
            token: response.access_token,
          }),
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const errorData = error?.value?.data;

      const responseData = data?.value;

      if (errorData && errorData.type === 'error') {
        isLoading.value = false;
        return $toast.show({
          type: 'warning',
          title: errorData.type,
          message: errorData.message,
          timeout: 3,
        });
      }

      if (responseData && responseData.code === 'user_password_confirm') {
        isLoading.value = false;
        $toast.show({
          type: 'success',
          title: responseData.type,
          message: responseData.message,
          timeout: 3,
        });
        return navigateTo({
          path: '/set-password/google',
          query: { type: 'password_confirm' },
          force: true,
        });
      }

      if (responseData && responseData.code === 'user_not_exist') {
        $toast.show({
          type: 'success',
          title: responseData.type,
          message: responseData.message,
          timeout: 3,
        });
        return navigateTo({
          path: '/set-password/google',
          query: { type: 'user_not_exist' },
          force: true,
        });
      }

      if (responseData && responseData.type === 'success') {
        cookie.value = responseData.data.access_token;
        isLoading.value = false;
        $toast.show({
          type: 'success',
          title: responseData.type,
          message: responseData.message,
          timeout: 3,
        });
        return navigateTo('/', { redirectCode: 301 });
      }
    }

    return null;
  };

  const handleOnError = (errorResponse: AuthCodeFlowErrorResponse) => {
    return $toast.show({
      type: 'danger',
      title: 'Error',
      message: errorResponse.error_description,
      timeout: 3,
    });
  };

  const { isReady, login: handleGoogleLogin } = useTokenClient({
    onSuccess: handleOnSuccess,
    onError: handleOnError,
  });

  return { isReady, handleGoogleLogin };
};

export default useAuthGoogle;
