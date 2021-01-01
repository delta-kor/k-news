import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/molecules/header';
import HeadlineContent from '../components/atoms/headline-content';
import request from '../utils/request';

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
  server: boolean;
}

const IndexPage: NextPage<PageProps> = ({ headline, server }) => {
  const [headlines, setHeadlines] = useState(headline);

  useEffect(() => {
    if (!server) {
      const url = 'http://lt2.kr/api/kn/headline.php';
      request(url, false).then(res => setHeadlines(res.data));
    }
  }, []);

  return (
    <div>
      <Header content={'K-NEWS'} />
      <Heading>헤드라인</Heading>
      <HeadlineWrapper>
        {headlines.map((item, index) => (
          <HeadlineContent data={item} index={server ? index : 0} key={index} />
        ))}
      </HeadlineWrapper>
    </div>
  );
};

IndexPage.getInitialProps = async () => {
  console.log(typeof window);
  if (typeof window === 'undefined') {
    const url = 'http://lt2.kr/api/kn/headline.php';
    const response = await request(url, true);
    const data = response.data as HeadlineApiItem[];
    return { headline: data, server: true };
  }
  return { headline: [null, null, null, null], server: false };
};

export default IndexPage;
