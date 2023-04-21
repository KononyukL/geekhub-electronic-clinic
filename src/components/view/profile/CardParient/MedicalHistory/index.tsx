import React, { FC, useEffect } from 'react';
import { AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Conclusion from '../../Conclusion';
import { ReactComponent as Avatar } from 'assets/icons/user-avatar.svg';
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
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getFinishedVisits, selectVisits } from 'store/visits';
import { parseDate } from 'config/helpers';

const MedicalHistory: FC<IPaginationComponent> = ({
  page,
  pageCount,
  handleChangePage,
  onSetItemsCount
}) => {
  const [searchParams] = useSearchParams();

  const dispatch = useAppDispatch();
  const { finishedVisits } = useAppSelector(selectVisits);

  useEffect(() => {
    if (finishedVisits) {
      onSetItemsCount(finishedVisits.count);
    }
  }, [finishedVisits]);

  useEffect(() => {
    dispatch(
      getFinishedVisits({
        page: searchParams.get('page') || 1
      })
    );
  }, [searchParams]);

  return (
    <Container>
      {finishedVisits?.results?.map((item, i) => (
        <StyledAccordion key={i} sx={{}}>
          <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
            <BoxAvatar>
              <Avatar />
              <DoctorInfo>
                <NameDoctor>{item.doctor}</NameDoctor>
                <Specialization>{item.specialization}</Specialization>
              </DoctorInfo>
            </BoxAvatar>
            <BoxData>
              <Date>
                Дата: <Span>{parseDate(item.date, 'DD.MM.YYYY')}</Span>
              </Date>
              <Diagnosis>
                Діагноз: <Span>{item.diagnosis || '-'}</Span>
              </Diagnosis>
            </BoxData>
          </StyledAccordionSummary>
          <AccordionDetails sx={{ '&.MuiAccordionDetails-root': { padding: 0 } }}>
            <Conclusion data={item} />
          </AccordionDetails>
        </StyledAccordion>
      ))}
      {finishedVisits && finishedVisits.count >= CARD_PER_PAGE && (
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
