import React, { FC, useState } from 'react';
import { Typography, Container } from '@mui/material';
import {
  WrapperConfirm,
  Wrapper,
  Date,
  TitleConfirm,
  Title,
  WrapperButtons,
  ConfirmButton,
  CanselButton,
  HomeButton
} from './styled';

import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { newAppointment } from 'store/appointments';
import { useNavigate } from 'react-router-dom';
import { getAuthData } from 'config/helpers';
import { useAppDispatch } from 'store/hooks';
import ROUTES from 'routes/constants';
import { RootState } from 'store';
import { Modal } from './styled';

type IModalConfirmVisit = {
  open: boolean;
  handleClose: () => void;
  currentDate: string;
  bookVisit: string;
  doctor_id: string | undefined | number;
};

const ModalConfirmVisit: FC<IModalConfirmVisit> = ({
  open,
  handleClose,
  currentDate,
  bookVisit,
  doctor_id
}) => {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useAppDispatch();
  const [thankForBook, setThankForBook] = useState(true);

  const { token } = getAuthData();
  const navigate = useNavigate();

  const postVisit = () => {
    setThankForBook(!thankForBook);
  };

  const goHomePage = () => {
    navigate(ROUTES.HOME.PATH);
  };

  const handleBookingVisit = () => {
    if (!token) {
      navigate(ROUTES.LOGIN.PATH);
    }
    dispatch(newAppointment({ doctor_id: doctor_id, date: currentDate, time: bookVisit }));
  };

  return (
    <Container>
      {thankForBook ? (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <WrapperConfirm>
            <TitleConfirm id="modal-modal-title">Підтвердити запис?</TitleConfirm>
            <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: '14px' }}>
              Обрана дата:
              <Date>
                {currentDate} ,{bookVisit}
              </Date>
            </Typography>
            <WrapperButtons>
              <ConfirmButton
                onClick={() => {
                  postVisit();
                  handleBookingVisit();
                }}>
                Так
              </ConfirmButton>
              <CanselButton onClick={handleClose}>Ні</CanselButton>
            </WrapperButtons>
          </WrapperConfirm>
        </Modal>
      ) : (
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Wrapper>
            <Title id="modal-modal-title">Дякуємо за запис на прийом!</Title>
            <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: '14px' }}>
              <Date>
                {currentDate}, {bookVisit}
              </Date>
              Якщо у Вас є додаткові питання, Вам потрібно змінити час, або відмінити прийом,
              будь-ласка, зв’яжіться з нами за номером:
              <Date>+38 (067) 20 20 773</Date>
            </Typography>
            <WrapperButtons>
              <HomeButton
                onClick={() => {
                  goHomePage();
                  handleClose();
                  postVisit();
                }}>
                Повернутись на головну
              </HomeButton>
            </WrapperButtons>
          </Wrapper>
        </Modal>
      )}
    </Container>
  );
};

export default ModalConfirmVisit;
