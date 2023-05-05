import React from 'react';
import { CircularProgress } from '@mui/material';
import { Loading } from './styled';

const Loader = () => {
  return (
    <Loading spacing={80} direction="row">
      <CircularProgress color="primary" size={110} />
    </Loading>
  );
};

export default Loader;
