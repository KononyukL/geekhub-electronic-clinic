import React, { FC } from 'react';
import {
  Container,
  ContainerInfo,
  DoctorsInfo,
  Info,
  Reception,
  ReceptionInfo,
  Button
} from './styled';
import { ReactComponent as Avatar } from 'assets/icons/Avatar.svg';
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
          <Info>{date}</Info>
        </Reception>
        <Reception>
          <Info>{time}</Info>
        </Reception>
        <Reception>
          <Info>{reception}</Info>
        </Reception>
      </ReceptionInfo>
      <Button variant="outlined" onClick={onAction}>
        {isCompleted ? 'Детальніше' : 'Скасувати'}
      </Button>
    </Container>
  );
};

export default Visit;
