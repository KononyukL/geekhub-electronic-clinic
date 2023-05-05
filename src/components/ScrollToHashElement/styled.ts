import { Box, styled } from '@mui/material';

export const InitBox = styled(Box)(() => {
  return {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    zIndex: 1000
  };
});
