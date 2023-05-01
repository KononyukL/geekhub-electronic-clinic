import React, { FC, useState } from 'react';
import { Container, Typography, Wrapper, AboutMoreInfo, WrapperWorkingHours } from './styled';
import WorkingHours from 'components/WorkingHours';
import AboutDoctor from 'components/AboutDoctor';
import { IDoctorAndIndex } from '../interfaces';

const DoctorInfo: FC<IDoctorAndIndex> = ({ currentDoctor }) => {
  const [moreTest, setMoreText] = useState(false);

  return (
    <Container>
      <Wrapper>
        <AboutDoctor currentDoctor={currentDoctor} />
        <Typography onClick={() => setMoreText(!moreTest)}>
          {moreTest ? currentDoctor.info : `${currentDoctor.info.slice(0, 260)}...`}
        </Typography>
        <AboutMoreInfo to={`/doctors/${currentDoctor.id}`}>Більше про лікаря</AboutMoreInfo>
      </Wrapper>
      <WrapperWorkingHours>
        <WorkingHours doctorId={currentDoctor.id.toString()} />
      </WrapperWorkingHours>
    </Container>
  );
};

export default DoctorInfo;
