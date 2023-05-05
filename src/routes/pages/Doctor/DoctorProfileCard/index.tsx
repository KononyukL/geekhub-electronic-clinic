import React, { FC } from 'react';
import AboutDoctor from 'components/AboutDoctor';
import DetailAndFeedbacks from '../DetailsAndFeedbacks';
import { Container, Wrapper } from './styled';
import { IDoctorProps } from '../interfaces';

const DoctorProfileCard: FC<IDoctorProps> = ({ currentDoctor }) => {
  return (
    <Container>
      <Wrapper>
        <AboutDoctor currentDoctor={currentDoctor} />
        <DetailAndFeedbacks currentDoctor={currentDoctor} />
      </Wrapper>
    </Container>
  );
};

export default DoctorProfileCard;
