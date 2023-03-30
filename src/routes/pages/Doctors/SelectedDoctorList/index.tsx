import React, { FC, useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import { SelectedDoctor } from '../typesAndInterfaces';

import { Wrapper, Container } from './styled';
import Doctor from '../AboutDoctor';

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
    <Container>
      <Wrapper>
        {selectedDoctors.length > 0 &&
          getCurrentDoctors().map((doctor, index) => (
            <Doctor key={index} doctor={doctor} index={index} />
          ))}
      </Wrapper>
      {selectedDoctors.length >= 3 ? (
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChangePage}
          variant="outlined"
          shape="rounded"
        />
      ) : null}
    </Container>
  );
};

export default SelectedDoctorList;
