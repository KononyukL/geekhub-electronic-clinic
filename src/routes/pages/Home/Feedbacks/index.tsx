import React from 'react';
import { BoxInfo, Container, ContainerFeedback, FirstTitle, LastTitle } from './styled';
import FeedbackSlider from './FeedbackSlider';

const Feedbacks = () => {
  return (
    <Container>
      <BoxInfo>
        <FirstTitle>ЩО КАЖУТЬ ПРО НАС</FirstTitle>
        <LastTitle>Відгуки наших клієнтів</LastTitle>
      </BoxInfo>
      <ContainerFeedback>
        <FeedbackSlider />
      </ContainerFeedback>
    </Container>
  );
};

export default Feedbacks;
