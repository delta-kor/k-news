import { motion } from 'framer-motion';
import { NextPage } from 'next';
import styled from 'styled-components';
import Link from 'next/link';

const Background = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #2d7ff9;

  @media only screen and (max-height: 710px) {
    zoom: 0.8;
  }
`;

const Logo = styled(motion.img)`
  position: absolute;
  width: 67.36px;
  height: 58.69px;
  left: calc(50% - 67.36px / 2 + 0.18px);
  top: calc(50% - 58.69px / 2 - 248.65px);
`;

const Title = styled(motion.h1)`
  position: absolute;
  width: 167px;
  height: 60px;
  left: calc(50% - 167px / 2);
  top: calc(50% - 60px / 2 - 164px);
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  color: #ffffff;
`;

const MenuList = styled.div`
  position: absolute;
  height: 368px;
  left: 0;
  right: 0;
  top: calc(50% - 368px / 2 + 94px);
`;

const MenuItem = styled(motion.div)<{ active?: boolean }>`
  display: block;
  margin: 0 0 12px 0;
  font-style: normal;
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
`;

interface MenuData {
  title: string;
  href: string;
}

const menuData: MenuData[] = [
  { title: '홈', href: '/' },
  { title: '사회', href: '/society' },
  { title: '정치', href: '/politics' },
  { title: '경제', href: '/economic' },
  { title: '국제', href: '/foreign' },
  { title: '문화', href: '/culture' },
  { title: 'IT', href: '/it' },
];

interface PageProps {
  server: boolean;
}

const MenuPage: NextPage<PageProps> = ({ server }) => {
  return (
    <Background initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Logo src={'/logo.svg'} layoutId={'logo'} />
      <Title layoutId={'title'}>K-NEWS</Title>
      <MenuList>
        {menuData.map((data, index) => (
          <Link href={data.href} key={index}>
            <MenuItem
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={server ? { delay: index * 0.05 } : null}
              active={index === 0}
            >
              {data.title}
            </MenuItem>
          </Link>
        ))}
      </MenuList>
    </Background>
  );
};

MenuPage.getInitialProps = ({ req }) => {
  return { server: !!req };
};

export default MenuPage;
