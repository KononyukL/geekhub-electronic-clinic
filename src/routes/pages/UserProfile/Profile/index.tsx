import React from 'react';
import { BoxInfo, Container } from './styled';
import HeaderProfile from './HeaderProfile';

import PersonalData from './PersonalData';
import Security from './Security';

const Profile = () => {
  return (
    <Container>
      <HeaderProfile />
      <BoxInfo>
        <PersonalData />
        <Security />
      </BoxInfo>
    </Container>
  );
};
export default Profile;
