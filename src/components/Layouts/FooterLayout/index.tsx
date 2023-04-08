import { Outlet } from 'react-router-dom';
import Footer from '../../Footer';
import React, { FC } from 'react';
import { ContainerLayout } from './styled';
import ScrollToHashElement from '../../ScrollToHashElement';

const FooterLayout: FC = () => {
  return (
    <ContainerLayout>
      <ScrollToHashElement />
      <Outlet />
      <Footer />
    </ContainerLayout>
  );
};

export default FooterLayout;
