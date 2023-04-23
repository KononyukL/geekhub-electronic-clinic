import React, { FC, useEffect } from 'react';
import { BoxInfo, Container, Info, PatientInfo, Reception, ReceptionInfo } from './styled';
import {
  Accordion,
  AccordionSummary
} from 'routes/pages/UserProfile/Visits/CompletedVisits/styled';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionDetails, Box } from '@mui/material';
import Conclusion from 'components/view/profile/Conclusion';

import { theme } from 'theme';
import { ReactComponent as Avatar } from 'assets/icons/user-avatar.svg';
import { PATIENT_PER_PAGE } from 'routes/pages/DoctorProfile/Patient/index';
import { Pagination } from 'components';
import { IPaginationComponent } from 'types';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getFinishedVisits, selectVisits } from 'store/visits';
import { parseDate } from 'config/helpers';

const HistoryPatient: FC<IPaginationComponent> = ({
  pageCount,
  page,
  onSetItemsCount,
  handleChangePage
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
      {finishedVisits?.results?.map((visit, i) => (
        <Box key={i}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <PatientInfo>
                <Avatar />
                <BoxInfo>
                  <Info sx={{ fontWeight: 600 }}>{visit?.patient || '-'}</Info>
                  <Info>{visit?.phone_num || '-'}</Info>
                </BoxInfo>
              </PatientInfo>
              <ReceptionInfo>
                <Reception>
                  <Info sx={{ color: theme.palette.text.secondary }}>Дата:</Info>
                  <Info>{parseDate(visit.date, 'DD.MM.YYYY')}</Info>
                </Reception>
                <Reception>
                  <Info sx={{ color: theme.palette.text.secondary }}>Діагноз:</Info>
                  <Info>{visit?.diagnosis || '-'}</Info>
                </Reception>
              </ReceptionInfo>
            </AccordionSummary>
            <AccordionDetails sx={{ '&.MuiAccordionDetails-root': { padding: 0 } }}>
              <Conclusion data={visit} />
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
      {finishedVisits && finishedVisits.count > PATIENT_PER_PAGE && (
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

export default HistoryPatient;
