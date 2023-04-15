import React from 'react';
import { BoxInfo, Container, Data, Title } from './styled';
import { useTranslation } from 'react-i18next';
import { dataProfile } from 'routes/pages/UserProfile/Profile/mockData';

const PersonalDataCard = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <BoxInfo>
        <Title>{t('userProfile.profile.data.lastName')}:</Title>
        <Data>{dataProfile.lastName}</Data>
      </BoxInfo>
      <BoxInfo>
        <Title>{t('userProfile.profile.data.phone')}:</Title>
        <Data>{dataProfile.phone}</Data>
      </BoxInfo>
      <BoxInfo>
        <Title>{t('userProfile.profile.data.firstName')}:</Title>
        <Data>{dataProfile.firstName}</Data>
      </BoxInfo>
      <BoxInfo>
        <Title>{t('userProfile.profile.address.city')}:</Title>
        <Data>{dataProfile.city}</Data>
      </BoxInfo>
      <BoxInfo>
        <Title>{t('userProfile.profile.data.middleName')}:</Title>
        <Data>{dataProfile.middleName}</Data>
      </BoxInfo>
      <BoxInfo>
        <Title>{t('userProfile.profile.address.street')}:</Title>
        <Data>{dataProfile.street}</Data>
      </BoxInfo>
      <BoxInfo>
        <Title>{t('userProfile.profile.data.birthday')}:</Title>
        <Data>{dataProfile.birthday}</Data>
      </BoxInfo>
      <BoxInfo>
        <Title>{t('userProfile.profile.address.house')}:</Title>
        <Data>{dataProfile.house}</Data>
      </BoxInfo>
      <BoxInfo>
        <Title>{t('userProfile.profile.data.gender')}:</Title>
        <Data>{dataProfile.gender}</Data>
      </BoxInfo>
      <BoxInfo>
        <Title>{t('userProfile.profile.address.apartment')}:</Title>
        <Data>{dataProfile.apartment}</Data>
      </BoxInfo>
    </Container>
  );
};

export default PersonalDataCard;
