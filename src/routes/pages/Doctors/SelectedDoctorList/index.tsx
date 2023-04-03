import React, { FC, useEffect, useState } from 'react';
import { Box, Pagination } from '@mui/material';
import { IDoctor } from '../typesAndInterfaces';

import { Wrapper } from './styled';
import DoctorInfoBlock from '../DoctorInfoBlock';

interface SelectedDoctor {
  selectedDoctors: IDoctor[];
}

const SelectedDoctorList: FC<SelectedDoctor> = ({ selectedDoctors }) => {
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setPage(1);
  }, [selectedDoctors]);

  const itemsPerPage = 3;
  const pageCount = Math.ceil(selectedDoctors.length / itemsPerPage);

  const getCurrentDoctors = () => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return selectedDoctors.slice(startIndex, endIndex);
  };

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box>
      <Wrapper>
        {selectedDoctors.length > 0 &&
          getCurrentDoctors().map((doctor, index) => (
            <DoctorInfoBlock key={index} doctor={doctor} index={index} />
          ))}
      </Wrapper>
      <Box>
        {selectedDoctors.length >= 3 ? (
          <Pagination
            count={pageCount}
            page={page}
            onChange={handleChangePage}
            variant="outlined"
            shape="rounded"
          />
        ) : null}
      </Box>
    </Box>
  );
};

export default SelectedDoctorList;
