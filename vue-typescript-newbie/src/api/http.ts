import axios from "axios";
import { useAuthStore } from "@/store/auth";
import { useErrorStore } from "@/store/error";

const instance = axios.create({ baseURL: process.env.VUE_APP_API });

instance.interceptors.request.use((config) => {
  const authStore = useAuthStore();

  if (authStore.authData.token !== null) {
    config.headers.setAuthorization(`Bearer ${authStore.authData.token}`);
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    const errorStore = useErrorStore();
    errorStore.$reset();
    return response;
  },
  (error?) => {
    const errorStore = useErrorStore();

    if (error.response.status === 422) {
      errorStore.setValidationError(error.response.data.data);
    } else {
      return Promise.reject(error);
    }
  }
);

export default instance;
