import { Box, styled } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => {
  return {
    borderTop: `1px solid ${theme.palette.background.default}`,
    background: theme.palette.background.paper
  };
});
