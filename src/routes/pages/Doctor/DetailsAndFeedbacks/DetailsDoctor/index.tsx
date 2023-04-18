import React, { FC } from 'react';
import { Wrapper, Ul, Li, Title } from './styled';
import { Box } from '@mui/material';
import { IDoctorProps } from '../../interfaces';

const DetailsDoctor: FC<IDoctorProps> = ({ currentDoctor }) => {
  return (
    <Box>
      <Wrapper>
        <Title>Освіта</Title>
        <Ul>
          <Li>{currentDoctor.education}</Li>
        </Ul>
      </Wrapper>

      <Wrapper>
        <Title>Курси</Title>
        <Ul>
          <Li>{currentDoctor.courses}</Li>
        </Ul>
      </Wrapper>

      <Wrapper>
        <Title>Виконувані процедури</Title>
        <Ul>
          <Li>{currentDoctor.procedures_performed}</Li>
        </Ul>
      </Wrapper>
    </Box>
  );
};

export default DetailsDoctor;
