import React from 'react';
import {
  BoxImg,
  BoxInfo,
  Button,
  Container,
  FirstTitle,
  ImgOne,
  ImgTwo,
  LastTitle,
  Text
} from './styled';
import TeamOne from 'assets/icons/team-one.png';
import TeamTwo from 'assets/icons/team-two.png';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <Container id="about-us">
      <BoxImg sx={{ width: '50%' }}>
        <Box>
          <ImgOne src={TeamOne} alt="photo team" />
        </Box>
        <Box>
          <ImgTwo src={TeamTwo} alt="photo team" />
        </Box>
      </BoxImg>
      <BoxInfo>
        <FirstTitle variant="h2">{t('home.aboutUs.aboutTeam')}</FirstTitle>
        <LastTitle variant="h2">{t('home.aboutUs.polyclinic')}</LastTitle>
        <Text paragraph>{t('home.aboutUs.text')}</Text>
        <Button variant="contained" color="primary">
          {t('buttons.readMore')}
        </Button>
      </BoxInfo>
    </Container>
  );
};

export default AboutUs;
