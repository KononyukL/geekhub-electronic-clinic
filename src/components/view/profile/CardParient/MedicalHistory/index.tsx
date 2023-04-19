import React, { FC, useEffect } from 'react';
import { AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Conclusion from '../../Conclusion';
import { ReactComponent as Avatar } from 'assets/icons/user-avatar.svg';
import { medicalHistory } from 'components/view/profile/CardParient/MedicalHistory/mockData';
import {
  BoxAvatar,
  BoxData,
  Date,
  Diagnosis,
  DoctorInfo,
  NameDoctor,
  Span,
  Specialization,
  Container,
  StyledAccordion,
  StyledAccordionSummary
} from './styled';
import { IPaginationComponent } from 'types';
import { CARD_PER_PAGE } from 'components/view/profile/CardParient/index';
import { Pagination } from 'components/index';

const MedicalHistory: FC<IPaginationComponent> = ({
  page,
  pageCount,
  handleChangePage,
  onSetItemsCount
}) => {
  const currentCards = medicalHistory.slice((page - 1) * CARD_PER_PAGE, page * CARD_PER_PAGE);

  useEffect(() => {
    onSetItemsCount(medicalHistory.length);
  }, []);

  return (
    <Container>
      {currentCards.map((el, i) => (
        <StyledAccordion key={i} sx={{}}>
          <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
            <BoxAvatar>
              <Avatar />
              <DoctorInfo>
                <NameDoctor>{el.name}</NameDoctor>
                <Specialization>{el.specialization}</Specialization>
              </DoctorInfo>
            </BoxAvatar>
            <BoxData>
              <Date>
                Дата: <Span>{el.date}</Span>
              </Date>
              <Diagnosis>
                Діагноз: <Span>{el.diagnosis || '-'}</Span>
              </Diagnosis>
            </BoxData>
          </StyledAccordionSummary>
          <AccordionDetails sx={{ '&.MuiAccordionDetails-root': { padding: 0 } }}>
            <Conclusion data={currentCards[i]} />
          </AccordionDetails>
        </StyledAccordion>
      ))}
      {medicalHistory.length >= CARD_PER_PAGE && (
        <Pagination
          sx={{ padding: '28px' }}
          count={pageCount}
          page={page}
          color={'secondary'}
          onChange={handleChangePage}
          variant="outlined"
          shape="rounded"
        />
      )}
    </Container>
  );
};

export default MedicalHistory;
