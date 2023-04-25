import React, { FC } from 'react';
import { Container, Info, Span, Text, WrapInfo } from './styled';
import { Avatar } from '@mui/material';
import { theme } from 'theme';
interface IHeaderProfile {
  name: string;
  cardId: string;
  phone: string;
}
const HeaderProfile: FC<IHeaderProfile> = ({ name, cardId, phone }) => {
  return (
    <Container>
      <WrapInfo>
        <Avatar
          sx={{
            backgroundColor: theme.palette.background.default,
            width: '80px',
            height: '80px',
            color: theme.palette.text.secondary,
            fontSize: '30px'
          }}
          variant="square">
          {name[0]}
        </Avatar>
        <Info>
          <Text sx={{ fontWeight: 600, fontSize: '20px' }}>{name}</Text>
          <Text>{phone}</Text>
          <Text sx={{ display: 'flex', gap: '8px' }}>
            Картка №: <Span> {cardId} </Span>
          </Text>
        </Info>
      </WrapInfo>
    </Container>
  );
};

export default HeaderProfile;
