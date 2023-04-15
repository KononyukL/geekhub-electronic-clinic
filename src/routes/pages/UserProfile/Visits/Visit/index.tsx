import React, { FC } from 'react';
import {
  Container,
  ContainerInfo,
  DoctorsInfo,
  Info,
  Reception,
  ReceptionInfo,
  BoxInfo
} from './styled';
import { ReactComponent as UserAvatar } from 'assets/icons/user-avatar.svg';
import { useTranslation } from 'react-i18next';
import { theme } from 'theme';

interface IVisit {
  name: string;
  positionDoctor: string;
  date: string;
  time: string;
  reception: string;
  isCompleted?: boolean;
}
const Visit: FC<IVisit> = ({ name, positionDoctor, date, time, reception }) => {
  const { t } = useTranslation();
  return (
    <Container>
      <BoxInfo>
        <DoctorsInfo>
          <UserAvatar />
          <ContainerInfo>
            <Info sx={{ fontWeight: 600 }}>{name}</Info>
            <Info sx={{ color: theme.palette.primary.main }}>{positionDoctor}</Info>
          </ContainerInfo>
        </DoctorsInfo>
        <ReceptionInfo>
          <Reception>
            <Info sx={{ color: theme.palette.text.secondary }}>
              {t('userProfile.visits.date')}:
            </Info>
            <Info>{date}</Info>
          </Reception>
          <Reception>
            <Info sx={{ color: theme.palette.text.secondary }}>
              {t('userProfile.visits.time')}:
            </Info>
            <Info>{time}</Info>
          </Reception>
          <Reception>
            <Info sx={{ color: theme.palette.text.secondary }}>
              {t('userProfile.visits.reception')}:
            </Info>
            <Info>{reception}</Info>
          </Reception>
        </ReceptionInfo>
      </BoxInfo>
    </Container>
  );
};

export default Visit;
