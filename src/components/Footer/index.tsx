import React from 'react';
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
  return (
    <BoxFooter id="contacts">
      <Box>
        <BoxInfo>
          <TypographyTitle variant="h3">Інформація</TypographyTitle>
          {INFO_CONFIG.map((info) => (
            <LinkInfo key={info.name} to={info.path}>
              {info.name}
            </LinkInfo>
          ))}
        </BoxInfo>
        <BoxInfo>
          <TypographyTitle variant="h3">Пацієнту</TypographyTitle>
          {PATIENT_CONFIG.map((info) => (
            <LinkInfo key={info.name} to={info.path}>
              {info.name}
            </LinkInfo>
          ))}
        </BoxInfo>
        <BoxInfo>
          <TypographyTitle variant="h3">Направлення</TypographyTitle>
          {DIRECTIONS_CONFIG.map((direct) => (
            <LinkInfo key={direct.name} to={direct.path}>
              {direct.name}
            </LinkInfo>
          ))}
        </BoxInfo>
        <BoxInfo>
          <TypographyTitle variant="h3">Контакти та Соціальні мережі</TypographyTitle>
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
                м. Черкаси,, вул. Чорновола 92
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
                Пишіть по будь-яким питанням
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
        <Typography paragraph>© “Mediplus” 2023 Всі права захищені</Typography>
      </BoxSmall>
    </BoxFooter>
  );
};

export default Footer;
