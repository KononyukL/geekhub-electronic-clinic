import Slider from 'react-slick';
import { Box as MUIBox, Rating, styled, Typography } from '@mui/material';

export const StyledSlider = styled(Slider)({
  maxWidth: 695,
  margin: '0 auto'
});
export const BoxFeedback = styled(MUIBox)({
  background: 'transparent'
});

export const Review = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.primary.contrastText,
    fontStyle: 'italic',
    textAlign: 'center'
  };
});

export const Box = styled(MUIBox)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 24,
  marginTop: 42
});

export const BoxName = styled(MUIBox)({});

export const StyledRating = styled(Rating)(({ theme }) => {
  return {
    '&.MuiRating-root': {
      color: theme.palette.primary.main
    }
  };
});
