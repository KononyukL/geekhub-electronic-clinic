import { Box, styled, Typography } from '@mui/material';

export const Container = styled(Box)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    marginBottom: '20px'
  };
});

export const TitleForm = styled(Typography)(() => {
  return {
    fontWeight: 600,
    fontSize: 20
  };
});

export const ContainerInput = styled(Box)(() => {
  return {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridColumnGap: '24px',
    gridRowGap: '4px'
  };
});
