import { Outlet } from 'react-router-dom';
import { FC } from 'react';
import { Container } from './styled';
import Header from '../../Header';

const HeaderLayout: FC = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default HeaderLayout;
