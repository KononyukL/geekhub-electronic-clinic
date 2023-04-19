import React from 'react';
import { BoxDataPatient, Container, DataText, DataTitle } from './styled';
import { dataCardPatient } from '../mockData';

const DataCardPatient = () => {
  return (
    <Container>
      <BoxDataPatient>
        <DataTitle>Дата реєстрації:</DataTitle>
        <DataText>{dataCardPatient.registration}</DataText>
      </BoxDataPatient>
      <BoxDataPatient>
        <DataTitle>Номер телефону:</DataTitle>
        <DataText>{dataCardPatient.phone}</DataText>
      </BoxDataPatient>
      <BoxDataPatient>
        <DataTitle>Дата народження:</DataTitle>
        <DataText>{dataCardPatient.birthday}</DataText>
      </BoxDataPatient>
      <BoxDataPatient>
        <DataTitle>Електронна пошта:</DataTitle>
        <DataText>{dataCardPatient.email}</DataText>
      </BoxDataPatient>
      <BoxDataPatient>
        <DataTitle>Группа крові:</DataTitle>
        <DataText>{dataCardPatient.bloodType}</DataText>
      </BoxDataPatient>
      <BoxDataPatient>
        <DataTitle>Адреса:</DataTitle>
        <DataText>{dataCardPatient.address}</DataText>
      </BoxDataPatient>
      <BoxDataPatient>
        <DataTitle>Стать:</DataTitle>
        <DataText>{dataCardPatient.gender}</DataText>
      </BoxDataPatient>
    </Container>
  );
};

export default DataCardPatient;
