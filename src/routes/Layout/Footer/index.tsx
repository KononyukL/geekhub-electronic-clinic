import React from 'react';
import Navigation from '../Navigation';
import { ContainerFooter, Logo, SmallText } from './styled';

const Footer = () => {
  return (
    <ContainerFooter>
      <Navigation />
      <Logo>Logo</Logo>
      <SmallText>© "Гармонія" 2023 Всі права захищені</SmallText>
    </ContainerFooter>
  );
};

export default Footer;
