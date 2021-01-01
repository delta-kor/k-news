import { NextPage } from 'next';
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
  headline: HeadlineApiItem[];
}

const IndexPage: NextPage<PageProps> = ({ headline }) => {
  return (
    <div>
      <Header content={'K-NEWS'} />
      <Heading>헤드라인</Heading>
      <HeadlineWrapper>
        {headline.map(item => (
          <HeadlineContent data={item} />
        ))}
      </HeadlineWrapper>
    </div>
  );
};

IndexPage.getInitialProps = async ({ req }) => {
  const url = 'http://lt2.kr/api/kn/headline.php';
  const response = await request(url, !!req);
  const data = response.data as HeadlineApiItem[];
  return { headline: data };
};

export default IndexPage;
