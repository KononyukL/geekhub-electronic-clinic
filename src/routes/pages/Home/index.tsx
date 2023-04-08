import React from 'react';
import {
  BoxTitle,
  Box,
  Button,
  TypographyWhite,
  TypographyMain,
  BgImage,
  BoxCard,
  MainBox,
  StyleBox,
  SliderBox
} from './styled';

import { useTranslation } from 'react-i18next';
import AboutUs from './AboutUs';
import Feedbacks from './Feedbacks';
import Questions from './Questions';
import Header from '../../../components/Header';
import Main from 'assets/icons/main.svg';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../constants';
import CardInfo from './CardInfo';
import { ReactComponent as DoctorIcon } from 'assets/icons/doctor-icon.svg';
import { ReactComponent as EquipmentIcon } from 'assets/icons/equipment-icon.svg';
import { ReactComponent as ApproachIcon } from 'assets/icons/approach-icon.svg';
import ServiceProvide from './ServiceProvide';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onOpenDoctors = () => navigate(ROUTES.DOCTORS.PATH);
  return (
    <>
      <Box>
        <BgImage src={Main} />
        <StyleBox>
          <Header isWhite />
          <BoxTitle>
            <TypographyWhite paragraph sx={{ fontSize: 24, fontWeight: 600, paddingBottom: '8px' }}>
              {t('home.firstText')}
            </TypographyWhite>
            <TypographyWhite variant="h2" sx={{ fontSize: 40 }}>
              {t('home.title')}
            </TypographyWhite>
            <TypographyMain variant="h2" sx={{ fontSize: 40, paddingBottom: '16px' }}>
              {t('home.subTitle')}
            </TypographyMain>
            <TypographyWhite paragraph sx={{ fontSize: 20, maxWidth: 460 }}>
              {t('home.lastText')}
            </TypographyWhite>
            <Button onClick={onOpenDoctors} variant="contained" color="primary">
              {t('buttons.signUp')}
            </Button>
          </BoxTitle>
        </StyleBox>
      </Box>
      <MainBox>
        <BoxCard>
          <CardInfo
            image={<DoctorIcon />}
            title={t('home.cardInfo.title.doctor')}
            text={t('home.cardInfo.text.doctor')}
          />
          <CardInfo
            image={<EquipmentIcon />}
            title={t('home.cardInfo.title.equipment')}
            text={t('home.cardInfo.text.equipment')}
          />
          <CardInfo
            image={<ApproachIcon />}
            title={t('home.cardInfo.title.approach')}
            text={t('home.cardInfo.text.approach')}
          />
        </BoxCard>
        <AboutUs />
        <ServiceProvide />
      </MainBox>
      <SliderBox>
        <Feedbacks />
      </SliderBox>
      <MainBox>
        <Questions />
      </MainBox>
    </>
  );
};

export default Home;
