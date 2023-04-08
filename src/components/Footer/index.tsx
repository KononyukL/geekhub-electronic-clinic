import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  BoxFooter,
  BoxInfo,
  BoxSmall,
  ContactsSocialBox,
  LinkInfo,
  TextBox,
  TypographyTitle
} from './styled';
import { Link, Typography } from '@mui/material';
import { INFO_CONFIG } from './Configs/info-config';
import { PATIENT_CONFIG } from './Configs/patient-config';
import { DIRECTIONS_CONFIG } from './Configs/directions-config';
import { ReactComponent as Phone } from 'assets/icons/phone.svg';
import { ReactComponent as House } from 'assets/icons/house.svg';
import { ReactComponent as Letter } from 'assets/icons/letter.svg';
import { ReactComponent as Instagram } from 'assets/icons/instagram.svg';
import { ReactComponent as Twitter } from 'assets/icons/twitter.svg';
import { ReactComponent as Facebook } from 'assets/icons/facebook.svg';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <BoxFooter id="contacts">
      <Box>
        <BoxInfo>
          <TypographyTitle variant="h3">{t('layout.footer.info.title')}</TypographyTitle>
          {INFO_CONFIG.map((info) => (
            <LinkInfo key={info.name} to={info.path}>
              {t(info.name)}
            </LinkInfo>
          ))}
        </BoxInfo>
        <BoxInfo>
          <TypographyTitle variant="h3">{t('layout.footer.patient.title')}</TypographyTitle>
          {PATIENT_CONFIG.map((info) => (
            <LinkInfo key={info.name} to={info.path}>
              {t(info.name)}
            </LinkInfo>
          ))}
        </BoxInfo>
        <BoxInfo>
          <TypographyTitle variant="h3">{t('layout.footer.directions.title')}</TypographyTitle>
          {DIRECTIONS_CONFIG.map((direct) => (
            <LinkInfo key={direct.name} to={direct.path}>
              {t(direct.name)}
            </LinkInfo>
          ))}
        </BoxInfo>
        <BoxInfo>
          <TypographyTitle variant="h3">{t('layout.footer.contactsSocial.title')}</TypographyTitle>
          <ContactsSocialBox>
            <Phone />
            <TextBox>
              <Typography sx={{ margin: 0 }} paragraph>
                +38 (067) 20 20 773
              </Typography>
              <Typography sx={{ margin: 0, fontSize: 14 }} paragraph>
                пн-пт 09:00-18:00
              </Typography>
            </TextBox>
          </ContactsSocialBox>
          <ContactsSocialBox>
            <House />
            <TextBox>
              <Typography sx={{ margin: 0 }} paragraph>
                м. Черкасси, вул. Чорновола 92
              </Typography>
              <Typography sx={{ margin: 0, fontSize: 14 }} paragraph>
                пн-пт 09:00-18:00
              </Typography>
            </TextBox>
          </ContactsSocialBox>
          <ContactsSocialBox>
            <Letter />
            <TextBox>
              <Typography sx={{ margin: 0 }} paragraph>
                MediPlus@gmail.com
              </Typography>
              <Typography sx={{ margin: 0, fontSize: 14 }} paragraph>
                {t('layout.footer.email')}
              </Typography>
            </TextBox>
          </ContactsSocialBox>
          <ContactsSocialBox>
            <Link href="http://instagram.com">
              <Instagram />
            </Link>
            <Link href="http://www.twitter.com">
              <Twitter />
            </Link>
            <Link href="http://www.facebook.com">
              <Facebook />
            </Link>
          </ContactsSocialBox>
        </BoxInfo>
      </Box>
      <BoxSmall>
        <Typography paragraph>“Mediplus” 2023 {t('layout.footer.rights')}</Typography>
      </BoxSmall>
    </BoxFooter>
  );
};

export default Footer;
