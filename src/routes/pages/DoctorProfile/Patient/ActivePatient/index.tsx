import React, { FC, useEffect } from 'react';
import { BoxInfo, Button, Container } from './styled';
import { PatientActive } from './mockData';
import PatientInfo from '../PatientInfo';
import { Pagination } from 'components';
import { PATIENT_PER_PAGE } from '../index';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ROUTES from 'routes/constants';
import { IPaginationComponent } from 'types';
import { getPlannedVisits, selectVisits } from 'store/visits';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { parseDate } from 'config/helpers';
import NoRecords from 'components/view/profile/ NoRecords';
import { useUpdateEffect } from 'hooks';

const ActivePatient: FC<IPaginationComponent> = ({
  pageCount,
  page,
  onSetItemsCount,
  handleChangePage
}) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const { plannedVisits } = useAppSelector(selectVisits);

  useUpdateEffect(() => {
    dispatch(
      getPlannedVisits({
        page: searchParams.get('page') || 1
      })
    );
  }, [searchParams]);

  const openCard = (cardId: string, appointmentId: number, patientId: number) => () => {
    navigate(`${ROUTES.PATIENTS_DOCTOR.PATH}/${cardId}/${appointmentId}/${patientId}`);
  };

  useEffect(() => {
    onSetItemsCount(PatientActive.length);
  }, []);

  return (
    <Container>
      {plannedVisits &&
        (plannedVisits.results.length ? (
          plannedVisits.results.map((patient, i) => (
            <BoxInfo key={i}>
              <PatientInfo
                name={patient.patient}
                phone={patient.phone_num}
                date={parseDate(patient.date, 'DD.MM.YYYY')}
                time={patient.time}
                reception={patient.price}
              />
              <Button
                onClick={openCard(patient.card_id, patient.id, patient.patient_id)}
                disabled={!patient.card_id}
                variant="contained"
                color="secondary">
                До картки
              </Button>
            </BoxInfo>
          ))
        ) : (
          <NoRecords />
        ))}
      {plannedVisits && plannedVisits.count > PATIENT_PER_PAGE && (
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

export default ActivePatient;
