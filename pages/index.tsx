import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/molecules/header';
import HeadlineContent from '../components/atoms/headline-content';
import request from '../utils/request';
import ApiUrl from '../utils/url';

const Heading = styled.div`
  height: 35px;
  padding: 0 24px;
  top: 91px;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 35px;
  color: #112254;
`;

const HeadlineWrapper = styled.div`
  height: 262px;
  overflow-x: scroll;
  white-space: nowrap;

  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

interface PageProps {
  headline: (HeadlineApiItem | null)[];
  topNews: (TopNewsApiItem | null)[];
  server: boolean;
}

const IndexPage: NextPage<PageProps> = ({ headline, topNews, server }) => {
  const [headlineList, setHeadline] = useState(headline);
  const [topNewsList, setTopNews] = useState(topNews);

  useEffect(() => {
    if (!server) {
      request(ApiUrl.HEADLINE, false).then(data => setHeadline(data));
      request(ApiUrl.TOP_NEWS, false).then(data => setTopNews(data));
    }
  }, []);

  return (
    <div>
      <Header content={'K-NEWS'} />
      <Heading>헤드라인</Heading>
      <HeadlineWrapper>
        {headlineList.map((item, index) => (
          <HeadlineContent data={item} index={server || !item ? index : 0} key={index} />
        ))}
      </HeadlineWrapper>
      <Heading>주요 뉴스</Heading>
    </div>
  );
};

IndexPage.getInitialProps = async ({ req }) => {
  if (req) {
    const headline = await request(ApiUrl.HEADLINE, true);
    const topNews = await request(ApiUrl.TOP_NEWS, true);
    return { headline, topNews, server: true };
  }
  return {
    headline: [null, null, null, null],
    topNews: [null, null, null],
    server: false,
  };
};

export default IndexPage;
