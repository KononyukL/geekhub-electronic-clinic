import React from 'react';
import { Breadcrumbs as MUIBreadcrumbs, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';

const DoctorsBreadcrumbs = () => {
  const { t } = useTranslation();
  return (
    <MUIBreadcrumbs aria-label="breadcrumb" separator="▪">
      <Link underline="hover" color="inherit" href="/">
        {t('doctors.navigation.home')}
      </Link>
      <Link underline="hover" color="inherit" href="/doctors">
        {t('doctors.navigation.specialtiesAndDoctors')}
      </Link>
    </MUIBreadcrumbs>
  );
};

export default DoctorsBreadcrumbs;
