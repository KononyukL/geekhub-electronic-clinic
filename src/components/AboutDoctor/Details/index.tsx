import React, { FC } from 'react';
import { Block, Container, CurrentInfo, ServiceInfo, Img } from './styled';
import IMGExperience from 'assets/icons/Experience.svg';
import IMGReception from 'assets/icons/Reception.svg';
import IMGCategory from 'assets/icons/Category.svg';
import { IDoctorProps } from 'routes/pages/Doctor/interfaces';

const DoctorDetails: FC<IDoctorProps> = ({ currentDoctor }) => {
  return (
    <Container>
      <Block>
        <CurrentInfo>
          <Img src={IMGExperience} alt="Experience" title="Experience" />
          Стаж:
        </CurrentInfo>
        <CurrentInfo>
          <Img src={IMGCategory} alt="Category" title="Category" />
          Категорія:
        </CurrentInfo>
        <CurrentInfo>
          <Img src={IMGReception} alt="Price" title="Price" />
          Прийом:
        </CurrentInfo>
      </Block>
      <Block>
        <ServiceInfo>{currentDoctor.experience}</ServiceInfo>
        <ServiceInfo>{currentDoctor.category}</ServiceInfo>
        <ServiceInfo>{currentDoctor.price} грн</ServiceInfo>
      </Block>
    </Container>
  );
};

export default DoctorDetails;
