import React from 'react';
import Navigation from '../Navigation';
import { ContainerFooter, Logo, SmallText } from './styled';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <ContainerFooter>
      <Navigation />
      <Logo>Logo</Logo>
      <SmallText>© “Mediplus” 2023 {t('layout.footer')}</SmallText>
    </ContainerFooter>
  );
};

export default Footer;
