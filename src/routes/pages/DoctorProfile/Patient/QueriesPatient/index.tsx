import React, { FC, useEffect } from 'react';
import { BoxInfo, Container } from '../ActivePatient/styled';
import { PatientActive } from '../ActivePatient/mockData';
import PatientCard from '../PatientCard';
import { PATIENT_PER_PAGE } from '../index';
import { Pagination } from 'components';
import { ReactComponent as Cross } from 'assets/icons/cross.svg';
import { ReactComponent as Tick } from 'assets/icons/tick.svg';
import { Box, IconButton } from '@mui/material';
import { IPaginationComponent } from 'types';

const QueriesPatient: FC<IPaginationComponent> = ({
  pageCount,
  page,
  onSetItemsCount,
  handleChangePage
}) => {
  const currentPatient = PatientActive.slice(
    (page - 1) * PATIENT_PER_PAGE,
    page * PATIENT_PER_PAGE
  );

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
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <IconButton>
              <Cross />
            </IconButton>
            <IconButton>
              <Tick />
            </IconButton>
          </Box>
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

export default QueriesPatient;
