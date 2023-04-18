import React, { FC, useEffect } from 'react';
import { BoxInfo, Button, Container } from './styled';
import { PatientActive } from './mockData';
import PatientCard from '../PatientCard';
import { IPatientComponent } from '../../types';
import { Pagination } from 'components';
import { PATIENT_PER_PAGE } from '../index';
import { useNavigate } from 'react-router-dom';
import ROUTES from 'routes/constants';

const ActivePatient: FC<IPatientComponent> = ({
  pageCount,
  page,
  onSetItemsCount,
  handleChangePage
}) => {
  const navigate = useNavigate();
  const currentPatient = PatientActive.slice(
    (page - 1) * PATIENT_PER_PAGE,
    page * PATIENT_PER_PAGE
  );

  const openCard = (id: number) => () => {
    navigate(`${ROUTES.PATIENTS_DOCTOR.PATH}/${id}`);
  };

  useEffect(() => {
    onSetItemsCount(PatientActive.length);
  }, []);
  return (
    <Container>
      {currentPatient.map((patient, i) => (
        <BoxInfo key={i}>
          <PatientCard
            name={patient.name}
            phone={patient.phone}
            date={patient.date}
            time={patient.time}
            reception={patient.reception}
          />
          <Button onClick={openCard(patient.id)} variant="contained" color="secondary">
            До картки
          </Button>
        </BoxInfo>
      ))}
      {PatientActive.length >= PATIENT_PER_PAGE && (
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
