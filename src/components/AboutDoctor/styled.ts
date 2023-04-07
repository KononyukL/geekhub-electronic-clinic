import { styled, Box, CSSObject, Avatar } from '@mui/material';

export const Container = styled(Box)(() => {
  return {
    display: 'flex'
  } as CSSObject;
});

export const Doctor = styled(Box)(() => {
  return {
    display: 'flex',
    maxWidth: '700px',
    width: '100%'
  } as CSSObject;
});

export const PhotoDoctor = styled(Box)(() => {
  return {
    padding: '0 16px 25px 0'
  } as CSSObject;
});

export const Img = styled(Avatar)(() => {
  return {
    width: '150px',
    height: '150px',
    borderRadius: '0'
  } as CSSObject;
});

export const Direction = styled(Box)(({ theme }) => {
  return {
    fontSize: '16px',
    fontWeight: '500',
    paddingBottom: '12px',
    color: theme.palette.primary.main
  } as CSSObject;
});
