import axios from 'axios';
import ApiUrl from './url';

async function request(url: ApiUrl.HEADLINE, isSSR: boolean): Promise<HeadlineApiItem[]>;
async function request(url: ApiUrl.TOP_NEWS, isSSR: boolean): Promise<TopNewsApiItem[]>;
async function request(url: string, isSSR: boolean): Promise<any> {
  const proxy = '/api/proxy?url=';
  const response = await axios.get(isSSR ? url : proxy + encodeURI(url));
  return response.data;
}

export default request;
