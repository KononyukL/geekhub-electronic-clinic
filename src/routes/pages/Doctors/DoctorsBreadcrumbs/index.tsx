import React from 'react';
import { Breadcrumbs as MUIBreadcrumbs, Link } from '@mui/material';

const DoctorsBreadcrumbs = () => {
  return (
    <MUIBreadcrumbs aria-label="breadcrumb" separator="▪">
      <Link underline="hover" color="inherit" href="/">
        Головна
      </Link>
      <Link underline="hover" color="inherit" href="/doctors">
        Спеціальності та лікарі
      </Link>
    </MUIBreadcrumbs>
  );
};

export default DoctorsBreadcrumbs;
