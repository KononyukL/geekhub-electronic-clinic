import { Box, styled } from '@mui/material';

export const Container = styled(Box)(({ theme }) => {
  return {
    borderTop: `1px solid ${theme.palette.background.default}`,
    padding: '24px 0',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
    maxWidth: '816px',
    columnGap: '10px'
  };
});

export const BoxDataPatient = styled(Box)(() => {
  return {
    display: 'flex',
    gap: '32px'
  };
});
export const DataTitle = styled(Box)(({ theme }) => {
  return {
    width: '150px',
    color: theme.palette.text.secondary
  };
});
export const DataText = styled(Box)(() => {
  return {};
});
