import { NextPage } from 'next';
import styled from 'styled-components';
import Header from '../components/molecules/header';
import axios from 'axios';
import HeadlineContent from '../components/atoms/headline-content';

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
  margin: 16px 0 0 0;
  padding: 0 12px 0 24px;
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

IndexPage.getInitialProps = async () => {
  const response = await axios.get('http://lt2.kr/api/kn/headline.php');
  const data = response.data as HeadlineApiItem[];
  return { headline: data };
};

export default IndexPage;
