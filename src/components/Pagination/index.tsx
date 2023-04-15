import React, { FC } from 'react';
import { PaginationProps } from '@mui/material/Pagination/Pagination';
import { StyledPagination, WrapperPagination } from './styled';
import { SxProps } from '@mui/system/styleFunctionSx';

interface IPagination extends PaginationProps {
  sx?: SxProps;
}

const Pagination: FC<IPagination> = ({ sx, ...rest }) => {
  return (
    <WrapperPagination sx={sx}>
      <StyledPagination {...rest} />
    </WrapperPagination>
  );
};

export default Pagination;
