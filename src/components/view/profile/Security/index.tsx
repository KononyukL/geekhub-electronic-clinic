import React, { FC, useCallback, useState } from 'react';
import {
  BoxData,
  BoxSecurity,
  BoxTitle,
  ButtonEdit,
  Data,
  Title,
  TitleData
} from 'routes/pages/UserProfile/Profile/styled';
import { Edit } from '@mui/icons-material';
import { dataProfile } from 'routes/pages/UserProfile/Profile/mockData';
import PasswordForm from 'components/FormsProfile/PasswordForm';
import { SxProps } from '@mui/system/styleFunctionSx';
interface ISecurity {
  sx?: SxProps;
}
const Security: FC<ISecurity> = ({ sx }) => {
  const [isEdit, setIsEdit] = useState(false);

  const onEdit = () => {
    setIsEdit(true);
  };

  const closeEdit = useCallback(() => {
    setIsEdit(false);
  }, []);

  return (
    <BoxData sx={sx}>
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
