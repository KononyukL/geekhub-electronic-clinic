import React from 'react';
import { BoxInfo, Container, Data, Title } from './styled';
import { useAppSelector } from 'store/hooks';
import { selectProfile } from 'store/profile';

const PersonalDataCard = () => {
  const { profile } = useAppSelector(selectProfile);

  return (
    <Container>
      <BoxInfo>
        <Title>Прізвище:</Title>
        <Data>{profile?.last_name || '-'}</Data>
      </BoxInfo>
      <BoxInfo>
        <Title>Телефон:</Title>
        <Data>{profile?.phone_num || '-'}</Data>
      </BoxInfo>
      <BoxInfo>
        <Title>Ім’я:</Title>
        <Data>{profile?.first_name || '-'}</Data>
      </BoxInfo>
      <BoxInfo>
        <Title>Місто:</Title>
        <Data>{profile?.address_city || '-'}</Data>
      </BoxInfo>
      <BoxInfo>
        <Title>По-батькові:</Title>
        <Data>{profile?.patronim_name || '-'}</Data>
      </BoxInfo>
      <BoxInfo>
        <Title>Вулиця:</Title>
        <Data>{profile?.address_street || '-'}</Data>
      </BoxInfo>
      <BoxInfo>
        <Title>Дата народження:</Title>
        <Data>{profile?.birth_date || '-'}</Data>
      </BoxInfo>
      <BoxInfo>
        <Title>Будинок:</Title>
        <Data>{profile?.address_house || '-'}</Data>
      </BoxInfo>
      <BoxInfo>
        <Title>Стать:</Title>
        <Data>{profile?.sex || '-'}</Data>
      </BoxInfo>
      <BoxInfo>
        <Title>Квартира:</Title>
        <Data>{profile?.address_appartment || '-'}</Data>
      </BoxInfo>
      <BoxInfo>
        <Title>Електронна пошта:</Title>
        <Data>{profile?.email || '-'}</Data>
      </BoxInfo>
    </Container>
  );
};

export default PersonalDataCard;
