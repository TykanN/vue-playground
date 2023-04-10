import { defineStore } from "pinia";
import { reactive } from "vue";

interface AuthData {
  token?: string;
}

export const useAuthStore = defineStore("auth", () => {
  const authData = reactive<AuthData>({});

  function setToken(value: string) {
    authData.token = value;
  }

  return { authData, setToken };
});
