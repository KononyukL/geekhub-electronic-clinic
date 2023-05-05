import React from 'react';
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography } from '@mui/material';
import ROUTES from '../../../constants';

const DoctorsBreadcrumbs = () => {
  return (
    <MUIBreadcrumbs sx={{ margin: '44px 0' }} aria-label="breadcrumb" separator="▪">
      <Link underline="hover" color="inherit" href={ROUTES.HOME.PATH}>
        Головна
      </Link>
      <Typography color="inherit">Спеціальності та лікарі</Typography>
    </MUIBreadcrumbs>
  );
};

export default DoctorsBreadcrumbs;
