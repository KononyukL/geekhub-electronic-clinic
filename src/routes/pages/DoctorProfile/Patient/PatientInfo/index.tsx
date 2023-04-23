import React, { FC, ReactNode } from 'react';
import {
  Container,
  ContainerInfo,
  Info,
  Reception,
  ReceptionInfo,
  StyledPatientInfo
} from './styled';
import { ReactComponent as UserAvatar } from 'assets/icons/user-avatar.svg';
import { theme } from 'theme';

interface IPatientInfo {
  name: string;
  phone: string;
  date: string;
  time: string;
  reception: string;
  isCompleted?: boolean;
  children?: ReactNode;
}

const PatientInfo: FC<IPatientInfo> = ({ name, phone, date, time, reception, children }) => {
  return (
    <Container>
      <StyledPatientInfo>
        <UserAvatar />
        <ContainerInfo>
          <Info sx={{ fontWeight: 600 }}>{name}</Info>
          <Info sx={{ color: theme.palette.text.primary }}>{phone}</Info>
        </ContainerInfo>
      </StyledPatientInfo>
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
      {children}
    </Container>
  );
};

export default PatientInfo;
