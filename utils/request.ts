import axios, { AxiosResponse } from 'axios';

export default function request(url: string, isSSR: boolean): Promise<AxiosResponse> {
  const proxy = '/api/proxy?url=';
  return axios.get(isSSR ? url : proxy + encodeURI(url));
}
