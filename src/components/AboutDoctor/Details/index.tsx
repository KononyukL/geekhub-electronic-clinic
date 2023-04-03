import React, { FC } from 'react';
import { Block, Container, CurrentInfo, ServiceInfo } from './styled';
import { IDoctor } from '../../../routes/pages/Doctors/typesAndInterfaces';

interface IDoctorDetails {
  doctor: IDoctor;
}

const DoctorDetails: FC<IDoctorDetails> = ({ doctor }) => {
  return (
    <Container>
      <Block>
        <CurrentInfo>Стаж:</CurrentInfo>
        <CurrentInfo>Категорія:</CurrentInfo>
        <CurrentInfo>Прийом:</CurrentInfo>
      </Block>
      <Block>
        <ServiceInfo>{doctor.seniority} років</ServiceInfo>
        <ServiceInfo>{doctor.category}</ServiceInfo>
        <ServiceInfo>{doctor.price} грн</ServiceInfo>
      </Block>
    </Container>
  );
};

export default DoctorDetails;
