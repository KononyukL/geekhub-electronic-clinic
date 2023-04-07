import React, { FC, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { IDoctor } from '../typesAndInterfaces';
import { Wrapper, Pagination, WrapperPagination } from './styled';
import DoctorInfo from '../DoctorInfo';

interface SelectedDoctor {
  selectedDoctors: IDoctor[];
  flagPagination: boolean;
}

const ITEMS_PER_PAGE = 3;

const SelectedDoctorsList: FC<SelectedDoctor> = ({ selectedDoctors, flagPagination }) => {
  const navigation = useNavigate();
  const location = useLocation();
  const [page, setPage] = useState<number>(() => {
    const searchParams = new URLSearchParams(location.search);
    const pageParam = searchParams.get('page');
    return pageParam ? parseInt(pageParam) : 1;
  });

  useEffect(() => {
    if (flagPagination) {
      setPage(1);
    }
  }, [flagPagination]);

  useEffect(() => {
    navigation({
      pathname: location.pathname,
      search: `?page=${page}`
    });
  }, [page]);

  const pageCount = Math.ceil(selectedDoctors.length / ITEMS_PER_PAGE);

  const currentDoctors = () =>
    selectedDoctors.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box>
      <Wrapper>
        {selectedDoctors.length > 0 &&
          currentDoctors().map((doctor, index) => (
            <DoctorInfo key={index} doctor={doctor} index={index} />
          ))}
      </Wrapper>
      <WrapperPagination>
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
      </WrapperPagination>
    </Box>
  );
};

export default SelectedDoctorsList;
