import { styled, Box as MUIBox } from '@mui/material';
import { Link } from 'react-router-dom';

export const Box = styled(MUIBox)({
  display: 'flex',
  alignItems: 'center',
  fontSize: 16,
  fontFamily: 'Open Sans',
  fontWeight: 600,
  columnGap: 56
});
export const StyledLink = styled(Link)(({ theme }) => {
  return {
    color: 'inherit',
    fontFamily: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.primary.main
    }
  };
});
