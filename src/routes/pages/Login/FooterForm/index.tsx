import React from 'react';
import { Link, Login, Container, Wrapper } from './styled';

const FooterForm = () => {

  return (
    <Container>
      <Wrapper>
        Виконуючи вхід, я підтверджую, що ознайомився та погоджуюсь з
        <Link to="/"> Політикою конфіденційності</Link>
        <Login>
          <Link to="/reset-password">Забули пароль</Link>
          <Link to="/registration">Реєстрація</Link>
        </Login>
      </Wrapper>
    </Container>
  );
};

export default FooterForm;
