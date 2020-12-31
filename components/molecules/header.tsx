import { Component } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Link from 'next/link';
import Logo from '../atoms/logo';

interface Props {
  content: string;
}

const Layout = styled.div`
  width: 100%;
  height: 91px;
`;

const Icon = styled.div`
  position: absolute;
  width: 43px;
  height: 43px;
  left: 24px;
  top: 24px;
`;

const Content = styled(motion.p)`
  position: absolute;
  max-width: 260px;
  height: 35px;
  left: 91px;
  top: 29px;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 35px;
  color: #112254;
`;

export default class Header extends Component<Props, any> {
  render() {
    return (
      <Layout>
        <Link href={'/menu'}>
          <Icon>
            <Logo />
          </Icon>
        </Link>
        <Content layoutId={'title'}>{this.props.content}</Content>
      </Layout>
    );
  }
}
