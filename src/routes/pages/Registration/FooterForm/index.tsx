import React from 'react';
import { Link, Login, Container, Wrapper } from './styled';
import { useTranslation } from 'react-i18next';

const FooterForm = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Wrapper>
        {t('registration.confidenceText')}
        <Link to="/"> {t('registration.privacyPolicy')}</Link>
        <Login style={{ display: 'block' }}>
          {t('registration.loginText')}
          <Link to="/login"> {t('registration.login')}</Link>
        </Login>
      </Wrapper>
    </Container>
  );
};

export default FooterForm;
