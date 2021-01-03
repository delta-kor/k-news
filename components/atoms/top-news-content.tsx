import { Component } from 'react';
import styled from 'styled-components';
import getPressImage from '../../utils/press';

const Layout = styled.div`
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
  data: TopNewsApiItem | null;
}

export default class TopNewsContent extends Component<Props, any> {
  render() {
    if (this.props.data) {
      return (
        <Layout>
          <Content>{this.props.data.title}</Content>
          <Image src={this.props.data.image} />
          <Press src={getPressImage(this.props.data.press)} />
        </Layout>
      );
    }
  }
}
