import React, { FC } from 'react';
import { BoxDataPatient, Container, DataText, DataTitle } from './styled';
import { ICardPatient } from 'api/card-patient/types';
import { parseDate } from 'config/helpers';

interface IDataCardPatient {
  cardPatient: ICardPatient | null;
}
const DataCardPatient: FC<IDataCardPatient> = ({ cardPatient }) => {
  return (
    <Container>
      <BoxDataPatient>
        <DataTitle>Дата реєстрації:</DataTitle>
        <DataText>{parseDate(cardPatient?.register_date || '-', 'DD.MM.YYYY')}</DataText>
      </BoxDataPatient>
      <BoxDataPatient>
        <DataTitle>Номер телефону:</DataTitle>
        <DataText>{cardPatient?.phone_num || '-'}</DataText>
      </BoxDataPatient>
      <BoxDataPatient>
        <DataTitle>Дата народження:</DataTitle>
        <DataText>{cardPatient?.birth_date || '-'}</DataText>
      </BoxDataPatient>
      <BoxDataPatient>
        <DataTitle>Електронна пошта:</DataTitle>
        <DataText>{cardPatient?.email || '-'}</DataText>
      </BoxDataPatient>
      <BoxDataPatient>
        <DataTitle>Группа крові:</DataTitle>
        <DataText>{cardPatient?.blood_group || '-'}</DataText>
      </BoxDataPatient>
      <BoxDataPatient>
        <DataTitle>Адреса:</DataTitle>
        <DataText>{cardPatient?.address || '-'}</DataText>
      </BoxDataPatient>
      <BoxDataPatient>
        <DataTitle>Стать:</DataTitle>
        <DataText>{cardPatient?.sex || '-'}</DataText>
      </BoxDataPatient>
    </Container>
  );
};

export default DataCardPatient;
