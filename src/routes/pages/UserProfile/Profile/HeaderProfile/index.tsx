import React from 'react';
import { Container, Info, StyledButton, Text, WrapButton, WrapInfo } from './steled';
import { ReactComponent as Edit } from '../../../../../assets/icons/Edit.svg';
import { ReactComponent as Avatar } from '../../../../../assets/icons/Avatar.svg';
import { useTranslation } from 'react-i18next';

const UserName = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <WrapInfo>
        <Avatar />
        <Info>
          <Text>Стерненко Ілона Макарівна</Text>
          <Text>+38 (099) 133 27 13</Text>
          <Text>{t('userProfile.profile.cardNumber')}: 654665 </Text>
        </Info>
      </WrapInfo>
      <WrapButton>
        <Edit />
        <StyledButton>{t('buttons.edit')}</StyledButton>
      </WrapButton>
    </Container>
  );
};

export default UserName;
