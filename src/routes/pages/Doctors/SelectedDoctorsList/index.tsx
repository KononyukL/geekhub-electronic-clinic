import React, { FC } from 'react';
import { Box } from '@mui/material';
import { Wrapper } from './styled';
import DoctorInfo from '../DoctorInfo';
import { Pagination } from 'components';
import { ISelectedDoctor } from '../interfaces';

const DOCTORS_PER_PAGE = 6;

const SelectedDoctorsList: FC<ISelectedDoctor> = ({
  selectedDoctors,
  page,
  pageCount,
  handleChangePage,
  paginationCount
}) => {
  return (
    <Box>
      <Wrapper>
        {selectedDoctors?.length > 0 &&
          selectedDoctors.map((doctor: any, index: number) => (
            <DoctorInfo key={doctor.id} currentDoctor={doctor} index={index} />
          ))}
      </Wrapper>
      {paginationCount && paginationCount > DOCTORS_PER_PAGE && (
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
