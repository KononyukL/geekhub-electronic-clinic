import React from 'react';
import { ContainerHome, ContainerTitle, StyledButton, Title } from './styled';

import { useTranslation } from 'react-i18next';
import Instruction from './Instruction';
import AboutUs from './AboutUs';
import Advantages from './Advantages';
import Feedbacks from './Feedbacks';
import Questions from './Questions';

const Home = () => {
  const { t } = useTranslation();

  return (
    <ContainerHome>
      <ContainerTitle>
        <Title>{t('title')}</Title>
        <StyledButton children="Знайти лікаря" />
      </ContainerTitle>
      <Instruction />
      <AboutUs />
      <Advantages />
      <Feedbacks />
      <Questions />
    </ContainerHome>
  );
};

export default Home;
