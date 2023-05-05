import React, { FC } from 'react';
import { Container, ContainerInfo, DoctorsInfo, Info, Reception, ReceptionInfo } from './styled';
import { theme } from 'theme';
import Avatar from 'components/Avatar';

interface IVisit {
  name: string;
  positionDoctor: string;
  date: string;
  time: string;
  reception: string;
  isCompleted?: boolean;
}
const Visit: FC<IVisit> = ({ name, positionDoctor, date, time, reception }) => {
  return (
    <Container>
      <DoctorsInfo>
        <Avatar>{name[0]}</Avatar>
        <ContainerInfo>
          <Info sx={{ fontWeight: 600 }}>{name}</Info>
          <Info sx={{ color: theme.palette.primary.main }}>{positionDoctor}</Info>
        </ContainerInfo>
      </DoctorsInfo>
      <ReceptionInfo>
        <Reception>
          <Info sx={{ color: theme.palette.text.secondary }}>Дата:</Info>
          <Info>{date}</Info>
        </Reception>
        <Reception>
          <Info sx={{ color: theme.palette.text.secondary }}>Час:</Info>
          <Info>{time}</Info>
        </Reception>
        <Reception>
          <Info sx={{ color: theme.palette.text.secondary }}>Ціна:</Info>
          <Info>{reception}</Info>
        </Reception>
      </ReceptionInfo>
    </Container>
  );
};

export default Visit;
