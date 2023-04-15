import React, { useCallback, useState } from 'react';
import { BoxData, BoxTitle, ButtonEdit, Title } from '../styled';
import PersonalDataCard from 'components/view/profile/PersonalDataCard';
import { Edit } from '@mui/icons-material';
import ProfileForm from 'components/FormsProfile/ProfileForm';

const PersonalData = () => {
  const [isEdit, setIsEdit] = useState(false);

  const onEdit = () => {
    setIsEdit(true);
  };

  const closeEdit = useCallback(() => {
    setIsEdit(false);
  }, []);

  return (
    <BoxData>
      {!isEdit && (
        <BoxTitle>
          <Title>Персональні дані</Title>
          <ButtonEdit onClick={onEdit} startIcon={<Edit />}>
            Редагувати
          </ButtonEdit>
        </BoxTitle>
      )}
      {isEdit ? <ProfileForm closeEdit={closeEdit} /> : <PersonalDataCard />}
    </BoxData>
  );
};

export default PersonalData;
