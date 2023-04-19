import React, { FC } from 'react';
import { Box } from '@mui/material';
import { Wrapper } from './styled';
import DoctorInfo from '../DoctorInfo';
import { Pagination } from 'components';
import { usePagination } from 'hooks/usePagination';
import { ISelectedDoctor } from '../interfaces';

const ITEMS_PER_PAGE = 3;

const SelectedDoctorsList: FC<ISelectedDoctor> = ({ selectedDoctors, flagPagination }) => {
  const { page, pageCount, handleChangePage } = usePagination({
    clearPagination: flagPagination,
    itemsCount: selectedDoctors.length,
    itemsPerPage: ITEMS_PER_PAGE
  });

  const currentDoctors = () =>
    selectedDoctors.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <Box>
      <Wrapper>
        {selectedDoctors.length > 0 &&
          currentDoctors().map((doctor, index) => (
            <DoctorInfo key={doctor.id} currentDoctor={doctor} index={index} />
          ))}
      </Wrapper>
      {selectedDoctors.length >= 3 && (
        <Pagination
          count={pageCount}
          page={page}
          color={'secondary'}
          onChange={handleChangePage}
          variant="outlined"
          shape="rounded"
        />
      )}
    </Box>
  );
};

export default SelectedDoctorsList;
