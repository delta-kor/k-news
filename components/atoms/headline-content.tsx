import { Component } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import getPressImage from '../../utils/press';

const Layout = styled(motion.div)`
  position: relative;
  display: inline-block;
  width: 230px;
  height: 214px;
  margin: 16px 12px 0 0;
  background: #ffffff;
  box-shadow: 0 0 16px rgba(108, 141, 255, 0.15);
  border-radius: 16px;
  white-space: normal;

  :first-child {
    margin: 0 12px 0 24px;
  }

  :last-child {
    margin: 0 24px 0 0;
  }
`;

const Image = styled.img`
  position: absolute;
  height: 132px;
  left: 8px;
  right: 8px;
  top: 8px;
  border-radius: 8px;
`;

const Title = styled.p`
  position: absolute;
  height: 30px;
  left: 8px;
  right: 8px;
  bottom: 30px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #112254;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;

const Press = styled.img`
  position: absolute;
  height: 18px;
  left: 50%;
  bottom: 9px;
  transform: translateX(-50%);
`;

interface Props {
  index: number;
  data: HeadlineApiItem;
}

export default class HeadlineContent extends Component<Props, any> {
  render() {
    return (
      <Layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: this.props.index * 0.1 }}
      >
        <Image src={this.props.data.image} />
        <Title>{this.props.data.title}</Title>
        <Press src={getPressImage(this.props.data.press)} />
      </Layout>
    );
  }
}
