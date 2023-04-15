import React, { FC } from 'react';
import { Box, BoxButton, Button, Text, Title } from './styled';
import { useTranslation } from 'react-i18next';
import { Modal } from '@mui/material';

interface IModalProfile {
  open: boolean;
  setOpen: (props: boolean) => void;
  onClick?: () => void;
}

const ModalProfile: FC<IModalProfile> = ({ open, setOpen, onClick }) => {
  const { t } = useTranslation();
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box>
        <Title>{t('userProfile.visits.modalTitle')}</Title>
        <Text>{t('userProfile.visits.modalText')}</Text>
        <BoxButton>
          <Button variant="outlined" color="secondary" onClick={onClick}>
            Yes
          </Button>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            No
          </Button>
        </BoxButton>
      </Box>
    </Modal>
  );
};
export default ModalProfile;
