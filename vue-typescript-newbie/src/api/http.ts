import axios from "axios";
import { useAuthStore } from "@/store/auth";

const instance = axios.create({ baseURL: process.env.VUE_APP_API });

instance.interceptors.request.use((config) => {
  const authStore = useAuthStore();

  if (authStore.authData.token !== null) {
    config.headers.setAuthorization(`Bearer ${authStore.authData.token}`);
  }
  return config;
});

export default instance;
