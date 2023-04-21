import React, { useEffect } from 'react';
import { BoxInfo, Container } from './styled';
import HeaderProfile from './HeaderProfile';

import PersonalData from './PersonalData';
import Security from 'components/view/profile/Security';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getAuthData } from 'config/helpers';
import { getProfile, selectProfile } from 'store/profile';

const Profile = () => {
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
      <HeaderProfile
        name={`${profile?.last_name || ''} ${profile?.first_name || ''} ${
          profile?.patronim_name || ''
        } `}
      />
      <BoxInfo>
        <PersonalData />
        <Security sx={{ paddingBottom: 0 }} />
      </BoxInfo>
    </Container>
  );
};
export default Profile;
