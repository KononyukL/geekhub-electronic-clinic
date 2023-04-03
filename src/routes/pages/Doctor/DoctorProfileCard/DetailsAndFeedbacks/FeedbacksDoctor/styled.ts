import { Box, CSSObject, Divider, styled, Typography } from '@mui/material';

export const Wrapper = styled(Box)(({ theme }) => {
  return {
    minHeight: '625px',
    height: '100%'
  } as CSSObject;
});

export const Feedbacks = styled(Box)(({ theme }) => {
  return {
    paddingTop: '46px'
  } as CSSObject;
});

export const StyledBox = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '18px'
  } as CSSObject;
});

export const NameDoctor = styled(Box)(({ theme }) => {
  return {
    display: 'inline-block',
    fontSize: '16px'
  } as CSSObject;
});

export const Feedback = styled(Typography)(({ theme }) => {
  return {
    marginBottom: '18px'
  } as CSSObject;
});

export const Data = styled(Box)(({ theme }) => {
  return {
    color: '#969696',
    textAlign: 'right',
    marginBottom: '40px'
  } as CSSObject;
});

export const PaginationWrapper = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    top: '82px'
  } as CSSObject;
});

export const HorizontalLine = styled(Divider)(({ theme }) => {
  return {
    color: '#b8b8b8'
  } as CSSObject;
});
