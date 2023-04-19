import React, { FC } from 'react';
import Navigation from './Navigation';
import { BoxContacts, BoxMain, Button, ContactsBox, ContainerContent } from './styled';
import { useTranslation } from 'react-i18next';
import { useNavigate, Link } from 'react-router-dom';
import ROUTES from 'routes/constants';
import { Box, Typography, Link as MUILink } from '@mui/material';
import Translation from '../Translation';
import { ReactComponent as LogoBlack } from 'assets/icons/logo-black.svg';
import { ReactComponent as LogoWhite } from 'assets/icons/logo-white.svg';
import { getAuthData } from 'config/helpers';

interface IHeader {
  isWhite?: boolean;
}
const Header: FC<IHeader> = ({ isWhite }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { token, is_doctor } = getAuthData();

  const openProfile = () => {
    if (is_doctor) {
      navigate(ROUTES.PROFILE_DOCTOR.PATH);
      return;
    }

    navigate(ROUTES.PROFILE_USER.PATH);
  };
  const onLogin = () => navigate(ROUTES.LOGIN.PATH);

  return (
    <Box>
      <BoxContacts>
        <ContainerContent>
          <ContactsBox>
            <Typography sx={{ color: isWhite ? 'secondary.contrastText' : 'text.primary' }}>
              {t('layout.address')}
            </Typography>
            <MUILink
              sx={{ color: isWhite ? 'secondary.contrastText' : 'text.primary' }}
              href="tel:+380670000000"
              underline="none">
              +38 (067) 20 20 773
            </MUILink>
          </ContactsBox>
          <Translation />
        </ContainerContent>
      </BoxContacts>
      <BoxMain>
        <ContainerContent>
          <Link to={ROUTES.HOME.PATH}>{isWhite ? <LogoWhite /> : <LogoBlack />}</Link>
          <Navigation isWhite={isWhite} />
          <Button color="secondary" variant="contained" onClick={token ? openProfile : onLogin}>
            {token ? 'Мій кабінет' : 'Увійти'}
          </Button>
        </ContainerContent>
      </BoxMain>
    </Box>
  );
};

export default Header;
