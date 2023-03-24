import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { FC } from 'react';
import { ContainerLayout, StyledContentContainer } from './styled';

const Layout: FC = () => {
  return (
    <ContainerLayout>
      <Header />
      <StyledContentContainer>
        <Outlet />
      </StyledContentContainer>
      <Footer />
    </ContainerLayout>
  );
};

export default Layout;
