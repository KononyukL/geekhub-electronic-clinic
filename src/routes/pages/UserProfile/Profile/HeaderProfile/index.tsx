import React, { FC } from 'react';
import { Container, Info, Span, Text, WrapInfo } from './styled';

import { ReactComponent as UserAvatar } from 'assets/icons/user-avatar.svg';
interface IHeaderProfile {
  name: string;
  cardId: string;
}
const HeaderProfile: FC<IHeaderProfile> = ({ name, cardId }) => {
  return (
    <Container>
      <WrapInfo>
        <UserAvatar />
        <Info>
          <Text sx={{ fontWeight: 600, fontSize: '20px' }}>{name}</Text>
          <Text sx={{ display: 'flex', gap: '8px' }}>
            Картка №: <Span> {cardId} </Span>
          </Text>
        </Info>
      </WrapInfo>
    </Container>
  );
};

export default HeaderProfile;
