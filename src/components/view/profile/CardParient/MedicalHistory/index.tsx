import React, { FC, useEffect } from 'react';
import { AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Conclusion from '../../Conclusion';
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
import { useParams, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getFinishedVisits, selectVisits } from 'store/visits';
import { getAuthData, parseDate } from 'config/helpers';
import { getPatientFinishedVisits } from 'store/visits/thunks';
import NoRecords from 'components/view/profile/ NoRecords';
import Avatar from 'components/Avatar';
import { selectDoctors } from 'store/doctors';

const MedicalHistory: FC<IPaginationComponent> = ({
  page,
  pageCount,
  handleChangePage,
  onSetItemsCount
}) => {
  const [searchParams] = useSearchParams();

  const { is_doctor } = getAuthData();
  const { userId } = useParams();

  const dispatch = useAppDispatch();

  const { finishedVisits } = useAppSelector(selectVisits);
  const {
    specializations: { results: specializationsList }
  } = useAppSelector(selectDoctors);

  useEffect(() => {
    if (finishedVisits) {
      onSetItemsCount(finishedVisits.count);
    }
  }, [finishedVisits]);

  useEffect(() => {
    const page = searchParams.get('page') || 1;
    const specialist = searchParams.get('specialist');
    const specializationId = specializationsList.find((item) => item.name === specialist)?.id;

    if (!is_doctor) {
      dispatch(getFinishedVisits({ page, specializationId }));
    } else if (userId) {
      dispatch(getPatientFinishedVisits({ patientId: userId, filter: { page, specializationId } }));
    }
  }, [searchParams, is_doctor, userId]);

  return (
    <Container>
      {finishedVisits?.results &&
        (finishedVisits?.results.length ? (
          finishedVisits?.results?.map((item, i) => (
            <StyledAccordion key={i} sx={{}}>
              <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
                <BoxAvatar>
                  <Avatar>{item.doctor[0]}</Avatar>
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
          ))
        ) : (
          <NoRecords />
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
