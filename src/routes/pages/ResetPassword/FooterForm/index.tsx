import React from 'react';
import { Container, Link, Login, Wrapper } from './styled';
import { Typography } from '@mui/material';

const FooterForm = () => {
  return (
    <Container>
      <Wrapper>
        <Typography>
          Якщо ви не знаходите листа, перевірте папку “спам”. Зверніть увагу, тимчасовий пароль діє
          протягом 10 хвилин
        </Typography>
        <Login>
          <Link to="/login"> Відновлення пароль</Link>
          <Link to="/registration"> Зареєструватися</Link>
        </Login>
      </Wrapper>
    </Container>
  );
};

export default FooterForm;
