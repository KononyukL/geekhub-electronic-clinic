import { Box, styled, Typography } from '@mui/material';

export const Container = styled(Box)(({ theme }) => {
  return {
    borderTop: ` 1px solid ${theme.palette.background.default}`,
    padding: '24px 0',
    maxWidth: '700px'
  };
});

export const Title = styled(Typography)(() => {
  return {
    fontWeight: 600,
    fontSize: '20px'
  };
});

export const TextInfo = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.text.secondary,
    padding: '24px 0'
  };
});

export const BoxInfo = styled(Box)(() => {
  return {};
});

export const TitleUl = styled(Typography)(() => {
  return {
    fontWeight: 600
  };
});
export const Ul = styled('ul')(() => {
  return {
    padding: '0 24px'
  };
});
export const Li = styled('li')(() => {
  return {};
});
