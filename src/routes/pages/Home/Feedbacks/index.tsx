import React from 'react';
import { Container, ContainerFeedback } from './styled';
import { SectionTitle } from '../styled';
import FeedbackSlider from './FeedbackSlider';

const Feedbacks = () => {
  return (
    <Container>
      <SectionTitle>Відгуки наших клієнтів</SectionTitle>
      <ContainerFeedback>
        <FeedbackSlider />
      </ContainerFeedback>
    </Container>
  );
};

export default Feedbacks;
