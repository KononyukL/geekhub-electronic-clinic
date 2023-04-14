import React, { FC } from 'react';
import { Container, Typography, Wrapper, AboutMoreInfo, WrapperWorkingHours } from './styled';
import { useTranslation } from 'react-i18next';
import AboutDoctor from 'components/AboutDoctor';
import { IDoctor } from '../typesAndInterfaces';
import WorkingHours from 'components/WorkingHours';

interface IDoctorAndIndex {
  doctor: IDoctor;
  index: number;
}

const DoctorInfo: FC<IDoctorAndIndex> = ({ doctor }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Wrapper>
        <AboutDoctor doctor={doctor} />
        <Typography>{doctor.info.slice(0, 220)}...</Typography>
        <AboutMoreInfo to="/doctor">{t('doctors.moreAboutDoctor')}</AboutMoreInfo>
      </Wrapper>
      <WrapperWorkingHours>
        <WorkingHours doctorId={doctor.id}/>
      </WrapperWorkingHours>
    </Container>
  );
};

export default DoctorInfo;
