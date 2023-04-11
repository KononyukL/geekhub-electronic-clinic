import React, { FC } from 'react';
import { HomeButton, Modal, Title, Wrapper, WrapperButtons } from './styled';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import IMGDone from 'assets/icons/done.svg';

type IModalWindow = {
  open: boolean;
  handleClose: () => void;
};

const ModalWindow: FC<IModalWindow> = ({ open, handleClose }) => {
  const { t } = useTranslation();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Wrapper>
        <Title id="modal-modal-title">
          <img src={IMGDone} alt="Done" />
          {t('registration.modalWindow.thank')}
        </Title>
        <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: '16px' }}>
          {t('registration.modalWindow.text')}
        </Typography>
        <WrapperButtons>
          <HomeButton to="/" onClick={handleClose}>
            {t('buttons.home')}
          </HomeButton>
        </WrapperButtons>
      </Wrapper>
    </Modal>
  );
};

export default ModalWindow;
