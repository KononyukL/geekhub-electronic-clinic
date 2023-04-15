import React, { FC } from 'react';
import AboutDoctor from 'components/AboutDoctor';
import DetailAndFeedbacks from '../DetailsAndFeedbacks';
import { Container, Wrapper } from './styled';
import { IDoctor } from '../../../../store/doctors';

type TDoctorProfileCard = {
  currentDoctor: IDoctor;
};

const DoctorProfileCard: FC<TDoctorProfileCard> = ({ currentDoctor }) => {
  return (
    <Container>
      <Wrapper>
        <AboutDoctor doctor={currentDoctor} />
        <DetailAndFeedbacks />
      </Wrapper>
    </Container>
  );
};

export default DoctorProfileCard;
