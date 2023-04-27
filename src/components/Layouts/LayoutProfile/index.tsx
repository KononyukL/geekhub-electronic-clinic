import React, { FC, ReactNode } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Breadcrumbs, Link as MUILink, Typography } from '@mui/material';
import { ReactComponent as Square } from 'assets/icons/square.svg';
import { BoxInfo, BoxLayout, BoxLink, BoxOutlet, Button } from './styled';
import { ReactComponent as SingOut } from 'assets/icons/sign-out.svg';
import { useAppDispatch } from 'store/hooks';
import { logout } from 'store/auth';
import { useScrollToTop } from 'hooks/useScrollToTop';

interface ILayoutProfile {
  children: ReactNode;
}

const LayoutProfile: FC<ILayoutProfile> = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(logout(navigate));
  };

  useScrollToTop();

  return (
    <BoxLayout>
      <Breadcrumbs separator={<Square />} sx={{ margin: '44px 0 ' }}>
        <MUILink underline="hover" color="inherit" href="/">
          Головна
        </MUILink>
        <Typography color="text.secondary">Мій кабінет</Typography>
      </Breadcrumbs>
      <BoxInfo>
        <BoxLink>
          {children}
          <Button onClick={onLogout} startIcon={<SingOut />}>
            Вихід
          </Button>
        </BoxLink>
        <BoxOutlet>
          <Outlet />
        </BoxOutlet>
      </BoxInfo>
    </BoxLayout>
  );
};

export default LayoutProfile;
