import React, { FC } from 'react';
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography } from '@mui/material';
import { IDoctor } from 'store/doctors';

type TDoctorBreadcrumbs = {
  currentDoctor: IDoctor;
};

const DoctorBreadcrumbs: FC<TDoctorBreadcrumbs> = ({ currentDoctor }) => {
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