import { Component } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Block = styled.div`
  position: relative;
  width: 43px;
  height: 43px;
  background: #2d7ff9;
  border-radius: 12px;
  filter: drop-shadow(0px 2px 8px rgba(45, 127, 249, 0.5));
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 21.94px;
  height: 19.12px;
  left: 10.37px;
  top: 11.61px;
`;

export default class Logo extends Component<any, any> {
  render() {
    return (
      <Block>
        <Image src={'/logo.svg'} layoutId={'logo'} />
      </Block>
    );
  }
}
