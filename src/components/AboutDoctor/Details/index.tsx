import React, { FC } from 'react';
import { Block, Container, CurrentInfo, ServiceInfo, Img } from './styled';
import { IDoctor } from '../../../routes/pages/Doctors/typesAndInterfaces';
import { useTranslation } from 'react-i18next';
import IMGExperience from '../../../assets/icons/Experience.svg';
import IMGCategory from '../../../assets/icons/Category.svg';
import IMGReception from '../../../assets/icons/Reception.svg';

interface IDoctorDetails {
  doctor: IDoctor;
}

const DoctorDetails: FC<IDoctorDetails> = ({ doctor }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Block>
        <CurrentInfo>
          <Img src={IMGExperience} alt="Experience" title="Experience"></Img>
          {t('doctors.details.experience')}:
        </CurrentInfo>
        <CurrentInfo>
          <Img src={IMGCategory} alt="Category" title="Category"></Img>
          {t('doctors.details.category')}:
        </CurrentInfo>
        <CurrentInfo>
          <Img src={IMGReception} alt="Reception" title="Reception"></Img>
          {t('doctors.details.reception')}:
        </CurrentInfo>
      </Block>
      <Block>
        <ServiceInfo>{doctor.seniority} років</ServiceInfo>
        <ServiceInfo>{doctor.category}</ServiceInfo>
        <ServiceInfo>{doctor.price} {t('userProfile.visits.currency')}</ServiceInfo>
      </Block>
    </Container>
  );
};

export default DoctorDetails;
