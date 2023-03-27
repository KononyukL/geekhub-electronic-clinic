import React from 'react';
import { SectionTitle, StyledButton } from '../styled';
import { Container, Text } from './styled';

const AboutUs = () => {
  return (
    <Container>
      <SectionTitle>Про нашу клініку</SectionTitle>
      <Text></Text>
      <StyledButton children="Детальніше" />
    </Container>
  );
};

export default AboutUs;
