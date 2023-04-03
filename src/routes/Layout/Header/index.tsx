import React from 'react';
import Navigation from '../Navigation';
import {
  ContactsInfo,
  ContactsWrap,
  ContainerContacts,
  ContainerHeader,
  HeaderButton,
  HeaderMain,
  StyledContentContainer,
  Tel
} from './styled';
import { languages } from '../../../i18n';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../constants';
import { Button } from '@mui/material';

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onOpenProfile = () => navigate(ROUTES.PROFILE.PATH);

  const handleLangChange = React.useCallback(async () => {
    const currentLngIndex = languages.findIndex((item) => item === i18n.language);
    const nextIndex = currentLngIndex === languages.length - 1 ? 0 : currentLngIndex + 1;
    const nextLng = languages[nextIndex];

    await i18n.changeLanguage(nextLng);
  }, [i18n]);

  return (
    <ContainerHeader>
      <ContainerContacts>
        <StyledContentContainer>
          <ContactsWrap>
            <ContactsInfo>{t('layout.address')}</ContactsInfo>
            <Tel href="tel:+380670000000">+38 (067) 20 20 773</Tel>
            <ContactsInfo>пн-пт 09:00-18:00</ContactsInfo>
          </ContactsWrap>
          <Button onClick={handleLangChange}>{t('buttons.translate')}</Button>
        </StyledContentContainer>
      </ContainerContacts>
      <HeaderMain>
        <StyledContentContainer>
          <ContactsInfo>Logo</ContactsInfo>
          <Navigation isHeader />
          <HeaderButton onClick={onOpenProfile}>Open</HeaderButton>
        </StyledContentContainer>
      </HeaderMain>
    </ContainerHeader>
  );
};

export default Header;
