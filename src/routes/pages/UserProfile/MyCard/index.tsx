import React from 'react';
import { Container, Info, PatientInfo, Text, WrapInfo } from './styled';
import { ReactComponent as UserAvatar } from 'assets/icons/user-avatar.svg';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';

const MyCard = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <PatientInfo>
        <WrapInfo>
          <Box sx={{ display: 'flex', gap: '24px', marginRight: '130px' }}>
            <UserAvatar />
            <Info>
              <Text>Стерненко Ілона Макарівна</Text>
              <Text>+38 (099) 133 27 13</Text>
            </Info>
          </Box>
          <Text>{t('userProfile.profile.cardNumber')}: 654665 </Text>
        </WrapInfo>
      </PatientInfo>
    </Container>
  );
};

export default MyCard;
