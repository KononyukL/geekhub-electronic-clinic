import React from 'react';
import { Link, Login, Container, Wrapper } from './styled';

const FooterForm = () => {
  return (
    <Container>
      <Wrapper>
        Підтвердження паролю
        <Link to="/"> Політика конфіденційності</Link>
        <Login style={{ display: 'block' }}>
          Вже маєте обліковий запис?
          <Link to="/login"> Увійти</Link>
        </Login>
      </Wrapper>
    </Container>
  );
};

export default FooterForm;
