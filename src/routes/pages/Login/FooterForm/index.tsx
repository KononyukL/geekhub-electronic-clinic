import React from 'react';
import { Link, Login, Container, Wrapper } from './styled';
import { useTranslation } from 'react-i18next';

const FooterForm = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Wrapper>
        {t('login.confidenceText')}
        <Link to="/"> {t('login.privacyPolicy')}</Link>
        <Login>
          <Link to="/reset-password">{t('login.forgotPassword')}</Link>
          <Link to="/registration">{t('login.registration')}</Link>
        </Login>
      </Wrapper>
    </Container>
  );
};

export default FooterForm;
