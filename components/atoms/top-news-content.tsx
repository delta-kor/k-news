import { Component } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import getPressImage from '../../utils/press';

const Placeholder = styled(motion.div)`
  position: relative;
  height: 66px;
  width: 100%;
  margin: 0 0 12px 0;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 16px rgba(108, 141, 255, 0.15);
`;

const PlaceholderLineA = styled.div`
  position: absolute;
  height: 9px;
  left: 19px;
  right: 106px;
  top: 16px;
  background: #f9faff;
  border-radius: 7px;
`;

const PlaceholderLineB = styled.div`
  position: absolute;
  height: 9px;
  left: 19px;
  right: 205px;
  top: 32px;
  background: #f9faff;
  border-radius: 7px;
`;

const PlaceholderImage = styled.div`
  position: absolute;
  width: 36px;
  height: 32px;
  right: 22px;
  top: 12px;
  background: #e7ebff;
  border-radius: 8px;
`;

const PlaceholderPress = styled.div`
  position: absolute;
  width: 39px;
  height: 9px;
  left: calc(50% - 39px / 2);
  top: 50px;
  background: #f9faff;
  border-radius: 7px;
`;

const Layout = styled(motion.div)`
  position: relative;
  height: 66px;
  margin: 0 0 12px 0;
  background: #ffffff;
  box-shadow: 0 0 16px rgba(108, 141, 255, 0.15);
  border-radius: 8px;
`;

const Content = styled.p`
  position: absolute;
  height: 32px;
  left: 18px;
  right: 94px;
  top: 12px;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  color: #112254;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;

const Image = styled.img`
  position: absolute;
  max-width: 48px;
  height: 32px;
  right: 18px;
  top: 12px;
  border-radius: 4px;
`;

const Press = styled.img`
  position: absolute;
  height: 16px;
  left: 50%;
  bottom: 5px;
  transform: translateX(-50%);
`;

interface Props {
  index: number;
  data: TopNewsApiItem | null;
}

export default class TopNewsContent extends Component<Props, any> {
  render() {
    if (this.props.data) {
      return (
        <Layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: this.props.index * 0.1 }}
        >
          <Content>{this.props.data.title}</Content>
          <Image src={this.props.data.image} />
          <Press src={getPressImage(this.props.data.press)} />
        </Layout>
      );
    } else {
      return (
        <Placeholder
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: this.props.index * 0.1 }}
        >
          <PlaceholderLineA />
          <PlaceholderLineB />
          <PlaceholderImage />
          <PlaceholderPress />
        </Placeholder>
      );
    }
  }
}
