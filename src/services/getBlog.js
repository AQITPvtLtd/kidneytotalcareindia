import { httpAxios } from "../helper/httpHelper";

export async function getBlog() {
  const result = await httpAxios
    .get("/api/get-blogs")
    .then((response) => response.data);
  return result;
} 
