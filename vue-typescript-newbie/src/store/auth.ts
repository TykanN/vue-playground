import { defineStore } from "pinia";
import { reactive } from "vue";
import * as authApi from "@/api/auth";

interface AuthData {
  token?: string;
}

interface LoginReq {
  userId: string;
  password: string;
}

export const useAuthStore = defineStore("auth", () => {
  const authData = reactive<AuthData>({});

  function setToken(value: string) {
    authData.token = value;
  }

  async function login({ userId, password }: LoginReq) {
    try {
      const response = await authApi.login(userId, password);
      if (response.status === 200) {
        setToken(response.data.token);
      }
    } catch (e) {
      alert("아이디 혹은 비밀번호를 확인해주세요.");
    }
  }

  function loginWithoutAsync({ userId, password }: LoginReq) {
    authApi
      .login(userId, password)
      .then((response) => {
        if (response.status === 200) {
          setToken(response.data.token);
        }
      })
      .catch(() => {
        alert("아이디 혹은 비밀번호를 확인해주세요.");
      });
  }

  return { authData, login, loginWithoutAsync };
});
