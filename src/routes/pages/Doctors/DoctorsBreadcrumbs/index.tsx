import React from 'react';
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography } from '@mui/material';

const DoctorsBreadcrumbs = () => {
  return (
    <MUIBreadcrumbs aria-label="breadcrumb" separator="▪">
      <Link underline="hover" color="inherit" href="/">
        Головна
      </Link>
      <Typography color="inherit">Спеціальності та лікарі</Typography>
    </MUIBreadcrumbs>
  );
};

export default DoctorsBreadcrumbs;