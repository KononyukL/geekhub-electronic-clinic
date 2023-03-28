import React from 'react';
import { Container } from './styled';
import UserInfo from './ProfileForm';
import HeaderProfile from './HeaderProfile';
import ProfileForm from './ProfileForm';

const Profile = () => {
  return (
    <Container>
      <HeaderProfile />
      <ProfileForm />
    </Container>
  );
};

export default Profile;
