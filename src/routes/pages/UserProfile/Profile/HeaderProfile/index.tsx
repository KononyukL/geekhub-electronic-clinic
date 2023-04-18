import React from 'react';
import { Container, Info, Text, WrapInfo } from './styled';

import { ReactComponent as UserAvatar } from 'assets/icons/user-avatar.svg';
import { Typography } from '@mui/material';

const HeaderProfile = () => {
  return (
    <Container>
      <WrapInfo>
        <UserAvatar />
        <Info>
          <Text sx={{ fontWeight: 600, fontSize: '20px' }}>Стерненко Ілона Макарівна</Text>
          <Text sx={{ display: 'flex', gap: '8px' }}>
            Номер картки пацієнта:<Typography> 654665 </Typography>{' '}
          </Text>
        </Info>
      </WrapInfo>
    </Container>
  );
};

export default HeaderProfile;
