import React from 'react';
import { BoxInfo, Container } from './styled';
import HeaderProfile from './HeaderProfile';

import PersonalData from './PersonalData';
import Security from 'components/view/profile/Security';

const Profile = () => {
  return (
    <Container>
      <HeaderProfile />
      <BoxInfo>
        <PersonalData />
        <Security sx={{ paddingBottom: 0 }} />
      </BoxInfo>
    </Container>
  );
};
export default Profile;
