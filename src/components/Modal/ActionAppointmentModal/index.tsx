import React, { FC } from 'react';
import { Box, BoxButton, Button, TextInfo, TextModal, TitleModal } from './styled';
import { Modal } from '@mui/material';

interface IActionAppointmentModal {
  open: boolean;
  setOpen: (props: boolean) => void;
  name: string;
  date: string;
  time: string;
  onAction: () => void;
  title: string;
  subTitle: string;
}

const ActionAppointmentModal: FC<IActionAppointmentModal> = ({
  open,
  setOpen,
  onAction,
  date,
  time,
  name,
  title,
  subTitle
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal sx={{ backgroundColor: 'transparent' }} hideBackdrop open={open} onClose={handleClose}>
      <Box>
        <TitleModal>{title}</TitleModal>
        <TextModal>{subTitle}</TextModal>
        <TextInfo>{name}</TextInfo>
        <TextInfo>
          {date} о {time}
        </TextInfo>
        <BoxButton>
          <Button variant="outlined" color="secondary" onClick={onAction}>
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
export default ActionAppointmentModal;
