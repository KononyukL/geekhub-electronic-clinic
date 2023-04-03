import { CSSObject, styled, Box } from '@mui/material';
import Button from '../../../components/Button';

export const Wrapper = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '90px 0 170px 0'
  } as CSSObject;
});

export const Aside = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px'
  } as CSSObject;
});

export const Doctor = styled(Button)(({ theme }) => {
  return {
    width: '260px',
    height: '60px',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '10px',
    color: '#000000',
    background: '#f4f4f4',
    textTransform: 'capitalize',

    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.24)'
    }
  } as CSSObject;
});

export const AllDoctors = styled(Doctor)(({ theme }) => {
  return {
    color: '#000000',
    background: '#bcbcbc',

    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.4)'
    }
  };
});
