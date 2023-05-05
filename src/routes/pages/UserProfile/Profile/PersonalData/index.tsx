import React, { useCallback, useState } from 'react';
import { BoxData, BoxTitle, ButtonEdit, Title } from '../styled';
import PersonalDataCard from 'components/view/profile/PersonalDataCard';
import { Edit } from '@mui/icons-material';
import ProfileFormUser from 'components/FormsProfile/ProfileFormUser';

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
      <BoxTitle>
        <Title>Персональні дані</Title>
        {isEdit ? (
          <ButtonEdit onClick={closeEdit}>Закрити</ButtonEdit>
        ) : (
          <ButtonEdit onClick={onEdit} startIcon={<Edit />}>
            Редагувати
          </ButtonEdit>
        )}
      </BoxTitle>
      {isEdit ? <ProfileFormUser closeEdit={closeEdit} /> : <PersonalDataCard />}
    </BoxData>
  );
};

export default PersonalData;
