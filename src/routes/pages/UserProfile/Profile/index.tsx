import React from 'react';
import { BoxInfo, Container } from './styled';
import HeaderProfile from './HeaderProfile';

import PersonalData from './PersonalData';
import Security from 'components/view/profile/Security';
import { useAppSelector } from 'store/hooks';
import { selectProfile } from 'store/profile';

const Profile = () => {
  const { profile } = useAppSelector(selectProfile);

  return (
    <Container>
      <HeaderProfile
        cardId={profile?.card_id || ''}
        name={`${profile?.last_name || ''} ${profile?.first_name || ''} ${
          profile?.patronim_name || ''
        } `}
        phone={profile?.phone_num || ''}
      />
      <BoxInfo>
        <PersonalData />
        <Security sx={{ paddingBottom: 0 }} />
      </BoxInfo>
    </Container>
  );
};
export default Profile;
