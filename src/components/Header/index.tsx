import React, { FC } from 'react';
import Navigation from './Navigation';
import { BoxMain, Button, ContainerContent, Wrapper } from './styled';
import { useNavigate, Link } from 'react-router-dom';
import ROUTES from 'routes/constants';
import { Box } from '@mui/material';
import { ReactComponent as LogoBlack } from 'assets/icons/logo-black.svg';
import { ReactComponent as LogoWhite } from 'assets/icons/logo-white.svg';
import { getAuthData } from 'config/helpers';
import Notification from '../Notification';

interface IHeader {
  isWhite?: boolean;
}
const Header: FC<IHeader> = ({ isWhite }) => {
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
      <BoxMain>
        <ContainerContent>
          <Link to={ROUTES.HOME.PATH}>{isWhite ? <LogoWhite /> : <LogoBlack />}</Link>
          <Navigation isWhite={isWhite} />
          <Wrapper>
            {token && <Notification />}
            <Button color="secondary" variant="contained" onClick={token ? openProfile : onLogin}>
              {token ? 'Мій кабінет' : 'Увійти'}
            </Button>
          </Wrapper>
        </ContainerContent>
      </BoxMain>
    </Box>
  );
};

export default Header;
