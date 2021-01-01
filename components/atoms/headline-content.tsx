import { Component } from 'react';
import styled from 'styled-components';
import getPressImage from '../../utils/press';

const Layout = styled.div`
  position: relative;
  width: 230px;
  height: 214px;
  background: #ffffff;
  box-shadow: 0 0 16px rgba(108, 141, 255, 0.15);
  border-radius: 16px;
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
`;

const Press = styled.img`
  position: absolute;
  height: 18px;
  left: 50%;
  bottom: 9px;
  transform: translateX(-50%);
`;

interface Props {
  data: HeadlineApiItem;
}

export default class HeadlineContent extends Component<Props, any> {
  render() {
    return (
      <Layout>
        <Image src={this.props.data.image} />
        <Title>{this.props.data.title}</Title>
        <Press src={getPressImage(this.props.data.press)} />
      </Layout>
    );
  }
}
