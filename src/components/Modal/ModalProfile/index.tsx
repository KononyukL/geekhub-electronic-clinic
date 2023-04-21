import React, { FC } from 'react';
import { Box, BoxButton, Button, Text, Title } from './styled';
import { Modal } from '@mui/material';

interface IModalProfile {
  open: boolean;
  setOpen: (props: boolean) => void;
  deleteVisit: () => void;
}

const ModalProfile: FC<IModalProfile> = ({ open, setOpen, deleteVisit }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal sx={{ backgroundColor: 'transparent' }} hideBackdrop open={open} onClose={handleClose}>
      <Box>
        <Title>Скасувати прийом до лікаря?</Title>
        <Text>
          Зверніть увагу, що прийом можна скасувати тільки до 8 години ранку, того дня коли
          назначено візит
        </Text>
        <BoxButton>
          <Button variant="outlined" color="secondary" onClick={deleteVisit}>
            Так
          </Button>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Ні
          </Button>
        </BoxButton>
      </Box>
    </Modal>
  );
};
export default ModalProfile;
