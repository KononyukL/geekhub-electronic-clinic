import { Box, Button, styled, TextareaAutosize, Typography } from '@mui/material';

export const BoxConclusion = styled(Box)(() => {
  return {
    width: '700px'
  };
});
export const Title = styled(Typography)(() => {
  return {
    fontSize: '20px',
    fontWeight: 600,
    marginBottom: '24px'
  };
});

export const BoxData = styled(Box)(() => {
  return {
    marginBottom: '24px'
  };
});

export const TitleData = styled(Typography)(() => {
  return {
    fontWeight: 600,
    marginBottom: '8px'
  };
});
export const StyledTextareaAutosize = styled(TextareaAutosize)(({ theme }) => {
  return {
    width: '100%',
    padding: '10px',
    border: `1px solid ${theme.palette.text.primary}`,
    fontSize: '16px',
    fontFamily: 'Open Sans',
    resize: 'none',
    '&::placeholder': {
      color: theme.palette.text.secondary
    }
  };
});
export const StyledButton = styled(Button)(() => {
  return {
    textTransform: 'none',
    borderRadius: 0,
    width: '200px',
    padding: '14px 0'
  };
});
