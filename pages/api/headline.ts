import { NextApiHandler } from 'next';
import { JSDOM } from 'jsdom';
import axios from 'axios';

export interface HeadlineApiItem {
  title: string;
  image: string;
  press: string;
}

const HeadlineApiHandler: NextApiHandler = async (req, res) => {
  const response = await axios.get('https://news.daum.net/');
  const data = response.data as string;

  const { document } = new JSDOM(data).window;
  const headlines = document.querySelectorAll<HTMLLIElement>('.list_issue li');

  const result: HeadlineApiItem[] = [];
  headlines.forEach(item => {
    const title = item.querySelector<HTMLAnchorElement>('.cont_thumb .link_txt');
    const image = item.querySelector<HTMLImageElement>('.thumb_g');
    const press = item.querySelector<HTMLSpanElement>('.info_thumb');
    if (!title || !image || !press) return false;

    result.push({
      title: title.textContent,
      image: image.src,
      press: press.textContent,
    });
  });

  res.json(result);
};

export default HeadlineApiHandler;
