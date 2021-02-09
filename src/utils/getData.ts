import axios from "axios";

export async function GetData(uri: string) {
  const promise = axios.get(uri);

  const dataPromise = promise.then((res) => res.data);

  return dataPromise;
}
