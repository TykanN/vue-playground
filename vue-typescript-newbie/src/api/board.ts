import http from "@/api/http";

export async function store(title: string, content: string) {
  return http.post("/board", { title, content });
}
