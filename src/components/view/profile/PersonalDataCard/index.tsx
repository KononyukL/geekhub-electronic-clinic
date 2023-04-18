import React from 'react';
import { BoxInfo, Container, Data, Title } from './styled';
import { dataProfile } from 'routes/pages/UserProfile/Profile/mockData';

const PersonalDataCard = () => {
  return (
    <Container>
      <BoxInfo>
        <Title>Прізвище:</Title>
        <Data>{dataProfile.lastName}</Data>
      </BoxInfo>
      <BoxInfo>
        <Title>Телефон:</Title>
        <Data>{dataProfile.phone}</Data>
      </BoxInfo>
      <BoxInfo>
        <Title>Ім’я:</Title>
        <Data>{dataProfile.firstName}</Data>
      </BoxInfo>
      <BoxInfo>
        <Title>Місто:</Title>
        <Data>{dataProfile.city}</Data>
      </BoxInfo>
      <BoxInfo>
        <Title>По-батькові:</Title>
        <Data>{dataProfile.middleName}</Data>
      </BoxInfo>
      <BoxInfo>
        <Title>Вулиця:</Title>
        <Data>{dataProfile.street}</Data>
      </BoxInfo>
      <BoxInfo>
        <Title>Дата народження:</Title>
        <Data>{dataProfile.birthday}</Data>
      </BoxInfo>
      <BoxInfo>
        <Title>Будинок:</Title>
        <Data>{dataProfile.house}</Data>
      </BoxInfo>
      <BoxInfo>
        <Title>Стать:</Title>
        <Data>{dataProfile.gender}</Data>
      </BoxInfo>
      <BoxInfo>
        <Title>Квартира:</Title>
        <Data>{dataProfile.apartment}</Data>
      </BoxInfo>
    </Container>
  );
};

export default PersonalDataCard;
