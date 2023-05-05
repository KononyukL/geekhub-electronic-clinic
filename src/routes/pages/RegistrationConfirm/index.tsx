import React, { FC, useEffect } from 'react';
import { Container, Wrapper, Text, Button, Img } from './styled';
import ROUTES from '../../constants';
import { useAppDispatch } from 'store/hooks';
import { registerConfirm } from 'store/auth';
import { useParams } from 'react-router-dom';
import IMGLogo from 'assets/icons/logo.svg';

const RegistrationConfirm: FC = () => {
  const dispatch = useAppDispatch();
  const { userId, userToken } = useParams();

  useEffect(() => {
    dispatch(registerConfirm({ userId: userId, userToken: userToken }));
  }, [dispatch]);

  return (
    <Container>
      <Wrapper>
        <Text>
          <Img style={{ marginRight: '16px' }} src={IMGLogo} alt="Logo" title="Logo" />
          Акаунт успішно зареєстровано!
        </Text>
        <Button to={ROUTES.HOME.PATH}>Повернутися на головну</Button>
      </Wrapper>
    </Container>
  );
};

export default RegistrationConfirm;
