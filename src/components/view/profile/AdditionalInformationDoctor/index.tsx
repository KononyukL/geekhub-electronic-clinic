import React from 'react';
import { BoxInfo, Container, Li, TextInfo, Title, TitleUl, Ul } from './styled';
import { doctorInfo } from './mockData';

const AdditionalInformationDoctor = () => {
  return (
    <Container>
      <Title>Додаткова інформація</Title>
      <TextInfo>
        Зверніть увагу, згідно з політикою нашої поліклінки, персональні дані про кваліфікацію,
        спеціалізацію, стаж, освіту, категорію тощо вносяться виключно після перевірки документів
        через адміністрацію.
      </TextInfo>
      <BoxInfo>
        <TitleUl>Освіта:</TitleUl>
        <Ul>
          {doctorInfo.education.map((education, i) => (
            <Li key={i}>{education}</Li>
          ))}
        </Ul>
      </BoxInfo>
      <BoxInfo sx={{ padding: ' 32px 0' }}>
        <TitleUl>Курси:</TitleUl>
        <Ul>
          {doctorInfo.courses.map((courses, i) => (
            <Li key={i}>{courses}</Li>
          ))}
        </Ul>
      </BoxInfo>
      <BoxInfo>
        <TitleUl>Виконувані процедури:</TitleUl>
        <Ul>
          {doctorInfo.procedures.map((procedures, i) => (
            <Li key={i}>{procedures}</Li>
          ))}
        </Ul>
      </BoxInfo>
    </Container>
  );
};

export default AdditionalInformationDoctor;
