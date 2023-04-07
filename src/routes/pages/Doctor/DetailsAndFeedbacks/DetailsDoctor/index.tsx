import React from 'react';
import { Wrapper, Ul, Li, Title } from './styled';
import { Box } from '@mui/material';

const DetailsDoctor = () => {
  return (
    <Box>
      <Wrapper>
        <Title>Освіта</Title>
        <Ul>
          <Li>
            НМУ ім. А. О. Богомольця Інтернатура в НМАПО ім. П. Л. Шупика, кафедра психіатрії,
            психотерапії та медичної психології
          </Li>
        </Ul>
      </Wrapper>

      <Wrapper>
        <Title>Курси</Title>
        <Ul>
          <Li>ТУ «Психічні порушення у дітей і дорослих, сучасна психофармакотерапия» (2018)</Li>
          <Li>Антипсихотики другого покоління в фармакотерапії депресивних станів (2019)</Li>
          <Li>
            Оптимізація психофармакологических підходів до лікування психічних і поведінкових
            розладів, Харків (2020)
          </Li>
          <Li>Сучасні підходи до діагностики та лікування СДУГ (2020)</Li>
          <Li>ТУ «Комунікативні навички доктора»</Li>
          <Li>«COVID-19: DIAGNOSIS AND COMPLICATIONS» (2020)</Li>
          <Li>«Учасник 14th WPA World Congress of Psychiatry», Берлін, Німеччина</Li>
          <Li>«Замісна терапія залежностей», Ізраїль</Li>
          <Li>«Експертиза алкогольного і неалкогольного сп'яніння»</Li>
          <Li>«Психотерапія психосоматичних розладів»</Li>
          <Li>«Нове в діагностиці і терапії афективних розладів»</Li>
          <Li>«Клініка і психотерапія алкогольної та інших форм залежностей»</Li>
          <Li>«Інтегративна терапія тривожно-фобічних і депресивних розладів»</Li>
        </Ul>
      </Wrapper>

      <Wrapper>
        <Title>Виконувані процедури</Title>
        <Ul>
          <Li>Діагностика і диференціальна діагностика психічних розладів</Li>
          <Li>Психофармакотерапия психічних розладів</Li>
          <Li>Психотерапія психічних розладів</Li>
          <Li>Консультативний прийом</Li>
          <Li>Сімейне консультування</Li>
        </Ul>
      </Wrapper>
    </Box>
  );
};

export default DetailsDoctor;
