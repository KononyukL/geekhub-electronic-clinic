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
import PasswordForm from 'components/FormsProfile/PasswordForm';
import { SxProps } from '@mui/system/styleFunctionSx';
interface ISecurity {
  sx?: SxProps;
  email?: string;
}
const Security: FC<ISecurity> = ({ sx, email }) => {
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
            <Data>{email}</Data>
          </BoxSecurity>
          <BoxSecurity>
            <TitleData>Пароль:</TitleData>
            <Data>********</Data>
          </BoxSecurity>{' '}
        </>
      )}
    </BoxData>
  );
};

export default Security;
