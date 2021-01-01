import { NextPage } from 'next';
import styled from 'styled-components';
import Header from '../components/molecules/header';
import axios from 'axios';

const Heading = styled.div`
  position: absolute;
  height: 35px;
  left: 24px;
  right: 24px;
  top: 91px;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 35px;
  color: #112254;
`;

interface PageProps {
  headline: HeadlineApiItem[];
}

const IndexPage: NextPage<PageProps> = ({ headline }) => {
  return (
    <div>
      <Header content={'K-NEWS'} />
      <Heading>헤드라인</Heading>
    </div>
  );
};

IndexPage.getInitialProps = async () => {
  const response = await axios.get('http://lt2.kr/api/kn/headline.php');
  const data = response.data as HeadlineApiItem[];
  return { headline: data };
};

export default IndexPage;
