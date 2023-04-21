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
              Ми надаємо найкраще
            </TypographyWhite>
            <TypographyWhite variant="h2" sx={{ fontSize: 40 }}>
              Поліклініка MediPlus
            </TypographyWhite>
            <TypographyMain variant="h2" sx={{ fontSize: 40, paddingBottom: '16px' }}>
              З турботою про тебе
            </TypographyMain>
            <TypographyWhite paragraph sx={{ fontSize: 20, maxWidth: 460 }}>
              Передові медичні технології, професіоналізм у поєднанні з своєчасністю надання послуг
              та індивідуальний підхід до кожного пацієнта та ситуації – це філософія MediPlus
            </TypographyWhite>
            <Button onClick={onOpenDoctors} variant="contained" color="primary">
              Записатися
            </Button>
          </BoxTitle>
        </StyleBox>
      </Box>
      <MainBox>
        <BoxCard>
          <CardInfo
            image={<DoctorIcon />}
            title="Кваліфіковані лікарі"
            text="Ми постійно вдосконалюємо свої знання та навички, щоб забезпечити найкраще лікування для наших пацієнтів."
          />
          <CardInfo
            image={<EquipmentIcon />}
            title="Сучасне обладнання"
            text="Ми використовуємо сучасне обладнання та технології для діагностики та лікування різноманітних захворювань"
          />
          <CardInfo
            image={<ApproachIcon />}
            title="Індивідуальний підхід"
            text="Наша команда не просто лікує, ми створюємо атмосферу довіри та підтримки, щоб Ви відчували себе комфортно."
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
