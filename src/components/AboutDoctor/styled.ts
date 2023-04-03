import {styled, Box, CSSObject, Avatar} from '@mui/material';

export const Container = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
  } as CSSObject;
});

export const Doctor = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    maxWidth: '700px',
    width: '100%'
  } as CSSObject;
});

export const PhotoDoctor = styled(Box)(({ theme }) => {
  return {
    padding: '0 16px 25px 0'
  } as CSSObject
})

export const Img = styled(Avatar)(({ theme }) => {
  return {
    width: '150px',
    height: '150px',
    borderRadius: '0',
  } as CSSObject
})

export const Direction = styled(Box)(({ theme }) => {
  return {
    fontSize: '16px',
    paddingBottom: '12px',
    color: '#02C898',
  } as CSSObject
})

