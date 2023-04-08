import { CSSObject, styled } from '@mui/material';

export const ContainerLayout = styled('div')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  } as CSSObject;
});

