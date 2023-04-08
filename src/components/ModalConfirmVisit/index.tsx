import React, { FC, useState } from 'react';
import { Typography, Container } from '@mui/material';
import {
  Modal,
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
import {useTranslation} from "react-i18next";

type IModalConfirmVisit = {
  open: boolean;
  handleClose: () => void;
  bookVisit: string;
};

const ModalConfirmVisit: FC<IModalConfirmVisit> = ({ open, handleClose, bookVisit }) => {
  const {t} = useTranslation()
  const [thankForBook, setThankForBook] = useState(true);

  const postVisit = () => {
    setThankForBook(!thankForBook);
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
            <TitleConfirm id="modal-modal-title">{t('doctors.modalDoctors.confirm.title')}</TitleConfirm>
            <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: '14px' }}>
              {t('doctors.modalDoctors.confirm.text')}
              <Date>{bookVisit}</Date>
            </Typography>
            <WrapperButtons>
              <ConfirmButton onClick={postVisit}>{t('doctors.modalDoctors.confirm.yes')}</ConfirmButton>
              <CanselButton onClick={handleClose}>{t('doctors.modalDoctors.confirm.no')}</CanselButton>
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
              <Date>Середа 15 квітня, {bookVisit}</Date>
              {t('doctors.modalDoctors.cansel.text')}
              <Date>+38 (067) 20 20 773</Date>
            </Typography>
            <WrapperButtons>
              <HomeButton
                onClick={() => {
                  handleClose();
                  postVisit();
                }}>
                {t('doctors.modalDoctors.cansel.button')}
              </HomeButton>
            </WrapperButtons>
          </Wrapper>
        </Modal>
      )}
    </Container>
  );
};

export default ModalConfirmVisit;