import React, { FC } from 'react';
import { HomeButton, Modal, Title, Wrapper, WrapperButtons } from './styled';
import { Typography } from '@mui/material';
import IMGDone from 'assets/icons/done.svg';

type IModalWindow = {
  open: boolean;
  handleClose: () => void;
};

const ModalWindow: FC<IModalWindow> = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Wrapper>
        <Title id="modal-modal-title">
          <img src={IMGDone} alt="Done" />
          Дякуємо за реєстрацію
        </Title>
        <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: '16px' }}>
          Ми відправили лист на електронну пошту, що Ви вказали. Будь-ласка, перейдіть за
          посиланням, що прийшло у листі, для підтвердження та завершення реєстрації. Якщо Ви не
          знайшли листа, перевірте папку “Спам”
        </Typography>
        <WrapperButtons>
          <HomeButton to="/" onClick={handleClose}>
            На головну
          </HomeButton>
        </WrapperButtons>
      </Wrapper>
    </Modal>
  );
};

export default ModalWindow;
