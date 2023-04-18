import React, { useCallback, useState } from 'react';
import {
  BoxData,
  BoxTitle,
  ButtonEdit,
  Title
} from 'routes/pages/DoctorProfile/ProfileDoctor/styled';
import { Edit } from '@mui/icons-material';
import ProfileFormDoctor from '../../../FormsProfile/ProfileFormDoctor';
import DataCardDoctor from '../DataCardDoctor';

const PersonalDataDoctor = () => {
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
      {isEdit ? <ProfileFormDoctor closeEdit={closeEdit} /> : <DataCardDoctor />}
    </BoxData>
  );
};

export default PersonalDataDoctor;
