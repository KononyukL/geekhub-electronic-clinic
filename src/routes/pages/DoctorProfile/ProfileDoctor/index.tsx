import React, { useEffect } from 'react';
import { Box, Container, Info, Text, WrapInfo } from './styled';
import { BoxInfo } from '../../UserProfile/Profile/styled';
import Security from 'components/view/profile/Security';
import AdditionalInformationDoctor from 'components/view/profile/AdditionalInformationDoctor';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getAuthData } from 'config/helpers';
import DataCardDoctor from 'components/view/profile/DataCardDoctor';
import { doctor, selectDoctors } from 'store/doctors';
import { getProfile } from 'store/profile';
import Avatar from 'components/Avatar';
import { useScrollToTop } from 'hooks/useScrollToTop';

const ProfileDoctor = () => {
  const dispatch = useAppDispatch();
  const { id, user_id } = getAuthData();

  const { doctor: profile } = useAppSelector(selectDoctors);

  useScrollToTop();

  useEffect(() => {
    if (id && user_id) {
      dispatch(doctor({ doctorId: `${id}` }));
      dispatch(getProfile({ id: user_id }));
    }
  }, [id]);
  return (
    <Container>
      <Box>
        <WrapInfo>
          <Avatar>{profile?.last_name[0]}</Avatar>
          <Info>
            <Text sx={{ fontWeight: 600, fontSize: '20px' }}>
              {profile?.last_name || ''} {profile?.first_name || ''} {profile?.patronim_name || ''}
            </Text>
            <Text sx={{ display: 'flex', gap: '8px' }}>{profile?.specialization}</Text>
          </Info>
        </WrapInfo>
      </Box>
      <BoxInfo>
        <DataCardDoctor />
        <Security sx={{ paddingBottom: '24px' }} />
        <AdditionalInformationDoctor profile={profile} />
      </BoxInfo>
    </Container>
  );
};

export default ProfileDoctor;
