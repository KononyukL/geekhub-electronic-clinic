import React from 'react';
import { ContainerHome, Title } from './styled';

import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <ContainerHome>
      <Title>{t('title')}</Title>
    </ContainerHome>
  );
};

export default Home;
