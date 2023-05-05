import React, { FC } from 'react';
import { Container, Info, Span, WrapInfo } from './styled';
import { Typography } from '@mui/material';
import { theme } from 'theme';
import Avatar from 'components/Avatar';
interface IHeaderProfile {
  name: string;
  cardId: string;
  phone: string;
}
const HeaderProfile: FC<IHeaderProfile> = ({ name, cardId, phone }) => {
  return (
    <Container>
      <WrapInfo>
        <Avatar>{name[0]}</Avatar>
        <Info>
          <Typography sx={{ fontWeight: 600, fontSize: '20px' }}>{name}</Typography>
          <Typography>{phone}</Typography>
          {name && cardId ? (
            <Typography sx={{ display: 'flex', gap: '8px' }}>
              Картка №: <Span> {cardId} </Span>
            </Typography>
          ) : (
            <Typography sx={{ fontSize: 12, color: theme.palette.error.main }}>
              Карта пацієнта не створена зверніться будь ласка до адміністратора
            </Typography>
          )}
        </Info>
      </WrapInfo>
    </Container>
  );
};

export default HeaderProfile;
