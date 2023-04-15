import React from 'react';
import { Container, Info, Text, WrapInfo } from './styled';

import { ReactComponent as UserAvatar } from 'assets/icons/user-avatar.svg';

const HeaderProfile = () => {
  return (
    <Container>
      <WrapInfo>
        <UserAvatar />
        <Info>
          <Text sx={{ fontWeight: 600, fontSize: '20px' }}>Стерненко Ілона Макарівна</Text>
          <Text>Номер картки пацієнта: 654665 </Text>
        </Info>
      </WrapInfo>
    </Container>
  );
};

export default HeaderProfile;
