import { motion } from 'framer-motion';
import styled from 'styled-components';

const Background = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #2d7ff9;
`;

const Logo = styled(motion.img)`
  position: absolute;
  width: 67.36px;
  height: 58.69px;
  left: calc(50% - 67.36px / 2 + 0.18px);
  top: 128px;
`;

const Title = styled(motion.h1)`
  position: absolute;
  width: 167px;
  height: 60px;
  left: calc(50% - 167px / 2);
  top: 212px;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  color: #ffffff;
`;

export default function MenuPage() {
  return (
    <Background initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Logo src={'/logo.svg'} layoutId={'logo'} />
      <Title layoutId={'title'}>K-NEWS</Title>
    </Background>
  );
}
