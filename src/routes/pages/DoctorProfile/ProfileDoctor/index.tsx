import React from 'react';
import { ReactComponent as UserAvatar } from 'assets/icons/user-avatar.svg';
import { Box, Container, Info, Text, WrapInfo } from './styled';
import { BoxInfo } from '../../UserProfile/Profile/styled';
import Security from 'components/view/profile/Security';
import PersonalDataDoctor from 'components/view/profile/PersonalDataDoctor';
import AdditionalInformationDoctor from 'components/view/profile/AdditionalInformationDoctor';

const ProfileDoctor = () => {
  return (
    <Container>
      <Box>
        <WrapInfo>
          <UserAvatar />
          <Info>
            <Text sx={{ fontWeight: 600, fontSize: '20px' }}>Колісниченко Катерина Євгенівна</Text>
            <Text sx={{ display: 'flex', gap: '8px' }}>Кардіолог</Text>
          </Info>
        </WrapInfo>
      </Box>
      <BoxInfo>
        <PersonalDataDoctor />
        <Security sx={{ paddingBottom: '24px' }} />
        <AdditionalInformationDoctor />
      </BoxInfo>
    </Container>
  );
};

export default ProfileDoctor;
