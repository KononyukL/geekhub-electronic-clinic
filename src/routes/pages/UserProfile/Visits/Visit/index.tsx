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
  isCompleted?: boolean;
  onAction: () => void;
}
const Visit: FC<IVisit> = ({
  name,
  positionDoctor,
  date,
  time,
  reception,
  isCompleted,
  onAction
}) => {
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
          <Info>{reception}</Info>
        </Reception>
      </ReceptionInfo>
      <Button onClick={onAction}>{isCompleted ? 'Детальніше' : 'Скасувати'}</Button>
    </Container>
  );
};

export default Visit;
