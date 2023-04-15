import React, { FC } from 'react';
import { Block, Container, CurrentInfo, ServiceInfo, Img } from './styled';
import { IDoctor } from 'routes/pages/Doctors/typesAndInterfaces';
import IMGExperience from 'assets/icons/Experience.svg';
import IMGReception from 'assets/icons/Reception.svg';
import IMGCategory from 'assets/icons/Category.svg';

interface IDoctorDetails {
  doctor: IDoctor;
}

const DoctorDetails: FC<IDoctorDetails> = ({ doctor }) => {
  return (
    <Container>
      <Block>
        <CurrentInfo>
          <Img src={IMGExperience} alt="Experience" title="Experience"></Img>
          Стаж:
        </CurrentInfo>
        <CurrentInfo>
          <Img src={IMGCategory} alt="Category" title="Category"></Img>
          Категорія:
        </CurrentInfo>
        <CurrentInfo>
          <Img src={IMGReception} alt="Reception" title="Reception"></Img>
          Прийом:
        </CurrentInfo>
      </Block>
      <Block>
        <ServiceInfo>{doctor.experience}</ServiceInfo>
        <ServiceInfo>{doctor.category}</ServiceInfo>
        <ServiceInfo>{doctor.price} грн</ServiceInfo>
      </Block>
    </Container>
  );
};

export default DoctorDetails;
