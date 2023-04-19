import React, { useEffect } from 'react';
import { ReactComponent as UserAvatar } from 'assets/icons/user-avatar.svg';
import { Box, Container, Info, Text, WrapInfo } from './styled';
import { BoxInfo } from '../../UserProfile/Profile/styled';
import Security from 'components/view/profile/Security';
import PersonalDataDoctor from 'components/view/profile/PersonalDataDoctor';
import AdditionalInformationDoctor from 'components/view/profile/AdditionalInformationDoctor';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getAuthData } from 'config/helpers';
import { getProfile, selectProfile } from 'store/profile';

const ProfileDoctor = () => {
  const dispatch = useAppDispatch();
  const { id } = getAuthData();

  const { profile } = useAppSelector(selectProfile);

  useEffect(() => {
    if (id) {
      dispatch(getProfile({ id }));
    }
  }, [id]);
  return (
    <Container>
      <Box>
        <WrapInfo>
          <UserAvatar />
          <Info>
            <Text sx={{ fontWeight: 600, fontSize: '20px' }}>
              {profile?.last_name || ''} {profile?.first_name || ''} {profile?.patronim_name || ''}
            </Text>
            <Text sx={{ display: 'flex', gap: '8px' }}>Кардіолог</Text>
          </Info>
        </WrapInfo>
      </Box>
      <BoxInfo>
        <PersonalDataDoctor />
        <Security email={profile?.email || '-'} sx={{ paddingBottom: '24px' }} />
        <AdditionalInformationDoctor />
      </BoxInfo>
    </Container>
  );
};

export default ProfileDoctor;
