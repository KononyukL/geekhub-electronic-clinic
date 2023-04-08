import React from 'react';
import { BoxCard, BoxInfo, Container, FirstTitle, LastTitle, Text } from './styled';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Cardiology } from 'assets/icons/cardiology.svg';
import { ReactComponent as Pulmonology } from 'assets/icons/pulmonology.svg';
import { ReactComponent as Neurology } from 'assets/icons/neurology.svg';
import { ReactComponent as Therapy } from 'assets/icons/therapy.svg';
import { ReactComponent as Dermatology } from 'assets/icons/dermatology.svg';
import { ReactComponent as Gastroenterology } from 'assets/icons/gastroenterology.svg';
import CardInfo from '../CardInfo';

const ServiceProvide = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <BoxInfo>
        <FirstTitle>{t('home.serviceProvide.firstTitle')}</FirstTitle>
        <LastTitle>{t('home.serviceProvide.lastTitle')}</LastTitle>
        <Text>{t('home.serviceProvide.text')}</Text>
      </BoxInfo>
      <BoxCard>
        <CardInfo
          image={<Cardiology />}
          title={t('home.cardInfo.title.cardiology')}
          text={t('home.cardInfo.text.doctor')}
        />
        <CardInfo
          image={<Pulmonology />}
          title={t('home.cardInfo.title.pulmonology')}
          text={t('home.cardInfo.text.equipment')}
        />
        <CardInfo
          image={<Neurology />}
          title={t('home.cardInfo.title.neurology')}
          text={t('home.cardInfo.text.approach')}
        />
        <CardInfo
          image={<Therapy />}
          title={t('home.cardInfo.title.therapy')}
          text={t('home.cardInfo.text.doctor')}
        />
        <CardInfo
          image={<Dermatology />}
          title={t('home.cardInfo.title.dermatology')}
          text={t('home.cardInfo.text.equipment')}
        />
        <CardInfo
          image={<Gastroenterology />}
          title={t('home.cardInfo.title.gastroenterology')}
          text={t('home.cardInfo.text.approach')}
        />
      </BoxCard>
    </Container>
  );
};

export default ServiceProvide;
