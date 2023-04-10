import { styled } from '@mui/material';

export const Label = styled('label')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    fontWeight: 400
  };
});

export const StyledInput = styled('input')(({theme}) => {
  return {
    width: '100%',
    borderRadius: '12px',
    border: `1px solid ${theme.palette.text.primary}`,
    padding: '10px'
  };
});
