import React from 'react';
import { Link, Login, StyledBox, TextConfidence } from './styled';
import { useTranslation } from 'react-i18next';

const FooterForm = () => {
  const { t } = useTranslation();

  return (
    <StyledBox>
      <TextConfidence>
        {t('registration.confidenceText')}
        <Link to="/"> {t('registration.privacyPolicy')}</Link>
        <Login style={{ display: 'block' }}>
          {t('registration.loginText')}
          <Link to="/login"> {t('registration.login')}</Link>
        </Login>
      </TextConfidence>
    </StyledBox>
  );
};

export default FooterForm;
