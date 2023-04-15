import React, { useCallback, useState } from 'react';
import { BoxData, BoxSecurity, BoxTitle, ButtonEdit, Data, Title, TitleData } from '../styled';
import { Edit } from '@mui/icons-material';
import { dataProfile } from '../mockData';
import PasswordForm from 'components/FormsProfile/PasswordForm';

const Security = () => {
  const [isEdit, setIsEdit] = useState(false);

  const onEdit = () => {
    setIsEdit(true);
  };

  const closeEdit = useCallback(() => {
    setIsEdit(false);
  }, []);

  return (
    <BoxData sx={{ paddingBottom: 0 }}>
      <BoxTitle>
        <Title>Безпека</Title>
        {!isEdit && (
          <ButtonEdit onClick={onEdit} startIcon={<Edit />}>
            Редагувати
          </ButtonEdit>
        )}
      </BoxTitle>

      {isEdit ? (
        <PasswordForm closeEdit={closeEdit} />
      ) : (
        <>
          <BoxSecurity sx={{ marginBottom: '12px' }}>
            <TitleData>Електронна пошта:</TitleData>
            <Data>{dataProfile.email}</Data>
          </BoxSecurity>
          <BoxSecurity>
            <TitleData>Електронна пошта:</TitleData>
            <Data>********</Data>
          </BoxSecurity>{' '}
        </>
      )}
    </BoxData>
  );
};

export default Security;
