import { NextPage } from 'next';
import styled from 'styled-components';
import Header from '../components/molecules/header';

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

const IndexPage: NextPage = () => {
  return (
    <div>
      <Header content={'K-NEWS'} />
      <Heading>헤드라인</Heading>
    </div>
  );
};

export default IndexPage;
