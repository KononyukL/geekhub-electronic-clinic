import React, { FC } from 'react';
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography } from '@mui/material';
import { IDoctorProps } from '../interfaces';

const DoctorBreadcrumbs: FC<IDoctorProps> = ({ currentDoctor }) => {
  return (
    <MUIBreadcrumbs aria-label="breadcrumb" separator="▪">
      <Link underline="hover" color="inherit" href="/">
        Головна
      </Link>
      <Link underline="hover" color="inherit" href="/doctors">
        Спеціальності та лікарі
      </Link>
      <Typography color="inherit">
        {currentDoctor.last_name} {currentDoctor.first_name} {currentDoctor.patronim_name}
      </Typography>
    </MUIBreadcrumbs>
  );
};

export default DoctorBreadcrumbs;
