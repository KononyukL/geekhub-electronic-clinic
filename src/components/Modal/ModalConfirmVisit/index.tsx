import React, { FC, useEffect, useState } from 'react';
import { Typography, Container } from '@mui/material';
import {
  WrapperConfirm,
  Wrapper,
  Text,
  TitleConfirm,
  Title,
  WrapperButtons,
  ConfirmButton,
  CanselButton
} from './styled';

import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { newAppointment, selectAppointments } from 'store/appointments';
import { useNavigate } from 'react-router-dom';
import { getAuthData } from 'config/helpers';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import ROUTES from 'routes/constants';
import { RootState } from 'store';
import { Modal } from './styled';
import { workingHours } from 'store/workingHours';
import { useWorkingHours } from 'hooks/useWorkingHours';

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
  const [thankForBook, setThankForBook] = useState<boolean>(true);
  const { error: errorCode, isLoading: loading } = useAppSelector(selectAppointments);
  const { token } = getAuthData();
  const navigate = useNavigate();

  useEffect(() => {
    if (errorCode === "Cannot read properties of undefined (reading 'data')") {
      setThankForBook(true)
      handleClose();
    }
  }, [errorCode]);

  useEffect(() => {
    dispatch(workingHours({ doctor_id: doctor_id, date: currentDate }));
  }, [thankForBook]);

  const postVisit = () => {
    setThankForBook(!thankForBook);
  };

  const handleBookingVisit = () => {
    if (token) {
      dispatch(newAppointment({ doctor_id: doctor_id, date: currentDate, time: bookVisit }));
    } else {
      navigate(ROUTES.LOGIN.PATH);
    }
  };

  const handleCloseWindow = () => {
    handleClose();
    postVisit();
  };

  useWorkingHours();

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
              <Text>
                {currentDate} о {bookVisit}
              </Text>
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
      ) : !loading && (
        <Modal
          open={open}
          onClose={handleCloseWindow}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Wrapper>
            <Title id="modal-modal-title">Дякуємо за запис на прийом!</Title>
            <Text>Очікуйте підтвердження від лікаря.</Text>
            <Typography id="modal-modal-description" sx={{ mt: 1, fontSize: '14px' }}>
              <Text>
                {currentDate}, {bookVisit}
              </Text>
              Якщо у Вас є додаткові питання, Вам потрібно змінити час, або відмінити прийом,
              будь-ласка, зв’яжіться з нами за номером:
              <Text>+38 (067) 20 20 773</Text>
            </Typography>
          </Wrapper>
        </Modal>
      )}
    </Container>
  );
};

export default ModalConfirmVisit;
