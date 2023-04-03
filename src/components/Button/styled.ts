import { CSSObject, styled, Button as MUIButton } from '@mui/material';

export const Button = styled(MUIButton)(({ theme }) => {
  return {
    width: '60px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#0069d9'
    },
    '&:disabled': {
      opacity: '0.6',
      cursor: 'not-allowed'
    }
  } as CSSObject;
});
