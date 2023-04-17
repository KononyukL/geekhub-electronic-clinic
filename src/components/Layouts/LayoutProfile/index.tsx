import React from 'react';
import { Outlet } from 'react-router-dom';
import { Breadcrumbs, Link as MUILink, Typography } from '@mui/material';
import { ReactComponent as Square } from 'assets/icons/square.svg';
import { useTranslation } from 'react-i18next';
import { BoxInfo, BoxLayout, BoxLink, BoxOutlet, Button, LinkProfile } from './styled';
import { ReactComponent as Profile } from 'assets/icons/profile.svg';
import { ReactComponent as Visit } from 'assets/icons/visits.svg';
import { ReactComponent as SingOut } from 'assets/icons/sign-out.svg';

const Layout = () => {
  const { t } = useTranslation();
  return (
    <BoxLayout>
      <Breadcrumbs separator={<Square />} sx={{ margin: '44px 0 ' }}>
        <MUILink underline="hover" color="inherit" href="/">
          {t('layout.navigation.home')}
        </MUILink>
        <Typography color="text.secondary">Мій кабінет</Typography>
      </Breadcrumbs>
      <BoxInfo>
        <BoxLink>
          <LinkProfile
            to={'/user-profile'}
            className={({ isActive }) => (isActive ? 'active' : '')}>
            <Profile />
            {t('userProfile.link.profile')}
          </LinkProfile>
          <LinkProfile to={'/visits'} className={({ isActive }) => (isActive ? 'active' : '')}>
            <Visit />
            {t('userProfile.link.visits')}
          </LinkProfile>
          {/*<LinkProfile to={'/card'} className={({ isActive }) => (isActive ? 'active' : '')}>*/}
          {/*  <PatientCard />*/}
          {/*  {t('userProfile.link.card')}*/}
          {/*</LinkProfile>*/}
          <Button startIcon={<SingOut />}>Вихід</Button>
        </BoxLink>
        <BoxOutlet>
          <Outlet />
        </BoxOutlet>
      </BoxInfo>
    </BoxLayout>
  );
};

export default Layout;
