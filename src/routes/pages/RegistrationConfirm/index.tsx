import React, { FC, useEffect } from 'react';
import { Container, Wrapper, Text, Button } from './styled';
import ROUTES from '../../constants';
import { useAppDispatch } from 'store/hooks';
import { registerConfirm } from 'store/auth';
import { useParams } from 'react-router-dom';

const RegistrationConfirm: FC = () => {
  const dispatch = useAppDispatch();
  const { userId, userToken } = useParams();

  useEffect(() => {
    dispatch(registerConfirm({ userId: userId, userToken: userToken }));
  }, [dispatch]);

  return (
    <Container>
      <Wrapper>
        <Text>Ваш акаунт успішно зареєстровано!</Text>
        <Button to={ROUTES.HOME.PATH}>Повернутися на головну</Button>
      </Wrapper>
    </Container>
  );
};

export default RegistrationConfirm;
