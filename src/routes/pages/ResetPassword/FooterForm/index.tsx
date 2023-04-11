import React from 'react';
import { Container, Link, Login, Wrapper } from './styled';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const FooterForm = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Wrapper>
        <Typography>{t('resetPassword.info')}</Typography>
        <Login>
          <Link to="/login"> {t('resetPassword.back')}</Link>
          <Link to="/registration"> {t('resetPassword.registration')}</Link>
        </Login>
      </Wrapper>
    </Container>
  );
};

export default FooterForm;
