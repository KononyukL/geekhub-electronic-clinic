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

import { Modal } from './styled';
import { useTranslation } from 'react-i18next';
import { newAppointment } from 'store/appointments';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ROUTES from 'routes/constants';
import { getAuthData } from 'config/helpers';

type IModalConfirmVisit = {
  open: boolean;
  handleClose: () => void;
  currentDate: string;
  bookVisit: string;
  doctor_id: string | undefined;
};

const ModalConfirmVisit: FC<IModalConfirmVisit> = ({
  open,
  handleClose,
  currentDate,
  bookVisit,
  doctor_id
}) => {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  const { t } = useTranslation();
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
            <TitleConfirm id="modal-modal-title">
              {t('doctors.modalDoctors.confirm.title')}
            </TitleConfirm>
            <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: '14px' }}>
              {t('doctors.modalDoctors.confirm.text')}
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
                {t('buttons.yes')}
              </ConfirmButton>
              <CanselButton onClick={handleClose}>{t('buttons.no')}</CanselButton>
            </WrapperButtons>
          </WrapperConfirm>
        </Modal>
      ) : (
        <Modal
          open={open}
          onClose={() => {
            handleClose();
            postVisit();
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Wrapper>
            <Title id="modal-modal-title">{t('doctors.modalDoctors.cansel.title')}</Title>
            <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: '14px' }}>
              <Date>
                {currentDate}, {bookVisit}
              </Date>
              {t('doctors.modalDoctors.cansel.text')}
              <Date>+38 (067) 20 20 773</Date>
            </Typography>
            <WrapperButtons>
              <HomeButton
                onClick={() => {
                  goHomePage();
                  handleClose();
                  postVisit();
                }}>
                {t('buttons.button')}
              </HomeButton>
            </WrapperButtons>
          </Wrapper>
        </Modal>
      )}
    </Container>
  );
};

export default ModalConfirmVisit;
