import React, { FC } from 'react';
import { Container, Info, Text, WrapInfo } from './styled';

import { ReactComponent as UserAvatar } from 'assets/icons/user-avatar.svg';
import { Typography } from '@mui/material';
interface IHeaderProfile {
  name: string;
}
const HeaderProfile: FC<IHeaderProfile> = ({ name }) => {
  return (
    <Container>
      <WrapInfo>
        <UserAvatar />
        <Info>
          <Text sx={{ fontWeight: 600, fontSize: '20px' }}>{name}</Text>
          <Text sx={{ display: 'flex', gap: '8px' }}>
            Номер картки пацієнта:<Typography> 654665 </Typography>{' '}
          </Text>
        </Info>
      </WrapInfo>
    </Container>
  );
};

export default HeaderProfile;
