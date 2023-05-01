import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const TermsBox = styled(Box)({
  maxWidth: 1480,
  margin: '0 auto',
  padding: '30px 30px 100px'
});

export const Ol = styled('ol')(() => {
  return {
    fontWeight: 500,
    fontSize: '20px',
    marginBottom: '50px'
  };
});

export const Li = styled('li')(() => {
  return {};
});

export const Ul = styled('ul')(() => {
  return {};
});
