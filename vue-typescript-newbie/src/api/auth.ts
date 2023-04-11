import http from "@/api/http";

export async function login(userid: string, password: string) {
  return http.post("/login", { userid, password });
}
