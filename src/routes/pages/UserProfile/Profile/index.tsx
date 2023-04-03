import React, { useCallback, useState } from 'react';
import { Container } from './styled';
import HeaderProfile from './HeaderProfile';
import ProfileForm from './ProfileForm';

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);

  const toggleEdit = useCallback(() => setIsEdit((val) => !val), []);
  return (
    <Container>
      <HeaderProfile toggleEdit={toggleEdit} />
      <ProfileForm isEdit={isEdit} />
    </Container>
  );
};

export default Profile;
