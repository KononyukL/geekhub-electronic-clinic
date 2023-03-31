import React, { FC } from 'react';
import { Container, Wrapper } from './styled';
import AboutDoctor from '../../../../components/AboutDoctor';
import DetailAndFeedbacks from './DetailsAndFeedbacks';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';

const DoctorProfileCard: FC = () => {
  const { doctor } = useSelector((state: RootState) => state.doctor);

  return (
    <Container>
      <Wrapper>
        <AboutDoctor doctor={doctor} />
        <DetailAndFeedbacks />
      </Wrapper>
    </Container>
  );
};

export default DoctorProfileCard;
