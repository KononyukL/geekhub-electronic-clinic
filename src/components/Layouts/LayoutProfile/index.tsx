import React, { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Breadcrumbs, Link as MUILink, Typography } from '@mui/material';
import { ReactComponent as Square } from 'assets/icons/square.svg';
import { useTranslation } from 'react-i18next';
import { BoxInfo, BoxLayout, BoxLink, BoxOutlet, Button } from './styled';

import { ReactComponent as SingOut } from 'assets/icons/sign-out.svg';

interface ILayoutProfile {
  children: ReactNode;
}
const LayoutProfile: FC<ILayoutProfile> = ({ children }) => {
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
          {children}
          <Button startIcon={<SingOut />}>Вихід</Button>
        </BoxLink>
        <BoxOutlet>
          <Outlet />
        </BoxOutlet>
      </BoxInfo>
    </BoxLayout>
  );
};

export default LayoutProfile;
