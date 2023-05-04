import { styled, Box, Avatar } from '@mui/material';

export const Container = styled(Box)(() => {
  return {
    display: 'flex'
  };
});

export const Doctor = styled(Box)(() => {
  return {
    display: 'flex',
    maxWidth: 700,
    width: '100%'
  };
});

export const PhotoDoctor = styled(Box)(() => {
  return {
    padding: '0 16px 25px 0'
  };
});

export const Img = styled(Avatar)(() => {
  return {
    width: 150,
    height: 150,
    borderRadius: '0',
  };
});

export const Direction = styled(Box)(({ theme }) => {
  return {
    fontSize: 16,
    fontWeight: '500',
    paddingBottom: 12,
    color: theme.palette.primary.main
  };
});
