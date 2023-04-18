import React from 'react';
import { BoxInfo, Container, Data, Title } from './styled';
import { dataProfileDoctor } from './mockData';

const PersonalDataCard = () => {
  return (
    <Container>
      <BoxInfo>
        <Title>Прізвище:</Title>
        <Data>{dataProfileDoctor.lastName}</Data>
      </BoxInfo>
      <BoxInfo>
        <Title>Ім’я:</Title>
        <Data>{dataProfileDoctor.firstName}</Data>
      </BoxInfo>
      <BoxInfo>
        <Title>По-батькові:</Title>
        <Data>{dataProfileDoctor.middleName}</Data>
      </BoxInfo>
      <BoxInfo>
        <Title>Дата народження:</Title>
        <Data>{dataProfileDoctor.birthday}</Data>
      </BoxInfo>
      <BoxInfo>
        <Title>Телефон:</Title>
        <Data>{dataProfileDoctor.phone}</Data>
      </BoxInfo>
    </Container>
  );
};

export default PersonalDataCard;
