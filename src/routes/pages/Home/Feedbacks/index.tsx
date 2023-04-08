import React from 'react';
import { BoxInfo, Container, ContainerFeedback, FirstTitle, LastTitle } from './styled';
import FeedbackSlider from './FeedbackSlider';
import { useTranslation } from 'react-i18next';

const Feedbacks = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <BoxInfo>
        <FirstTitle>{t('home.reviews.firstTitle')}</FirstTitle>
        <LastTitle>{t('home.reviews.lastTitle')}</LastTitle>
      </BoxInfo>
      <ContainerFeedback>
        <FeedbackSlider />
      </ContainerFeedback>
    </Container>
  );
};

export default Feedbacks;
