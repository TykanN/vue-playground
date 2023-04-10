import http from "@/api/http";
import { useAuthStore } from "@/store/auth";

export async function login(userid: string, password: string) {
  const authStore = useAuthStore();

  const response = await http.post("/login", { userid, password });

  if (response.status === 200) {
    authStore.setToken(response.data.token);
  }
  return response;
}
