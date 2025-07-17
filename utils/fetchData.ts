import instance from "@/configs/instance";

export function getData(url: string, params: any, token: string) {
  return instance.get(`${url}`, {
    params,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function postData(url: string, payload: any, token?: string) {
  return await instance.post(`${url}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
