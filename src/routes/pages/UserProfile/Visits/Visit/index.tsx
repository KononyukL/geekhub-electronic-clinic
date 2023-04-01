import React, { FC } from 'react';
import { Container, ContainerInfo, DoctorsInfo, Info, Reception, ReceptionInfo } from './styled';
import { ReactComponent as Avatar } from '../../../../../assets/icons/Avatar.svg';
import Button from '../../../../../components/Button';
import { useTranslation } from 'react-i18next';

interface IVisit {
  name: string;
  positionDoctor: string;
  date: string;
  time: string;
  reception: string;
}
const Visit: FC<IVisit> = ({ name, positionDoctor, date, time, reception }) => {
  const { t } = useTranslation();
  return (
    <Container>
      <DoctorsInfo>
        <Avatar />
        <ContainerInfo>
          <Info>{name}</Info>
          <Info>{positionDoctor}</Info>
        </ContainerInfo>
      </DoctorsInfo>
      <ReceptionInfo>
        <Reception>
          <Info>{t('userProfile.visits.date')}:</Info>
          <Info>{date}</Info>
        </Reception>
        <Reception>
          <Info>{t('userProfile.visits.time')}:</Info>
          <Info>{time}</Info>
        </Reception>
        <Reception>
          <Info>{t('userProfile.visits.reception')}:</Info>
          <Info>
            {reception}
            {t('userProfile.visits.currency')}
          </Info>
        </Reception>
      </ReceptionInfo>
      <Button>ppppp</Button>
    </Container>
  );
};

export default Visit;
