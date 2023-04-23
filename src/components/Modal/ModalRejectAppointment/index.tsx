import React, { FC } from 'react';
import { Box, BoxButton, Button, TextInfo, TextModal, TitleModal } from './styled';
import { Modal } from '@mui/material';

interface IRejectAppointment {
  open: boolean;
  setOpen: (props: boolean) => void;
  name: string;
  date: string;
  time: string;
  deleteVisit: () => void;
}

const ModalRejectAppointment: FC<IRejectAppointment> = ({
  open,
  setOpen,
  deleteVisit,
  date,
  time,
  name
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal sx={{ backgroundColor: 'transparent' }} hideBackdrop open={open} onClose={handleClose}>
      <Box>
        <TitleModal>Відхилити прийом пацієнта?</TitleModal>
        <TextModal>Ви точно бажаєте відхилити прийом</TextModal>
        <TextInfo>{name}</TextInfo>
        <TextInfo>
          {date} о {time}
        </TextInfo>
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
export default ModalRejectAppointment;
