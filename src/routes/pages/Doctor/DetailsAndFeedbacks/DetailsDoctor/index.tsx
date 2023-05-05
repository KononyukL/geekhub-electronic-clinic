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
          {currentDoctor?.education.map((text) => (
            <Li key={text}>{text}</Li>
          ))}
        </Ul>
      </Wrapper>

      <Wrapper>
        <Title>Курси</Title>
        <Ul>
          {currentDoctor?.courses.map((text) => (
            <Li key={text}>{text}</Li>
          ))}
        </Ul>
      </Wrapper>

      <Wrapper>
        <Title>Виконувані процедури</Title>
        <Ul>
          {currentDoctor?.procedures_performed.map((text) => (
            <Li key={text}>{text}</Li>
          ))}
        </Ul>
      </Wrapper>
    </Box>
  );
};

export default DetailsDoctor;
