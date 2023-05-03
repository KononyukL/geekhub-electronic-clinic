import { Box, Button as MUIButton, styled, Typography } from '@mui/material';

export const Container = styled(Box)({
  background: 'transparent',
  maxWidth: 1480,
  padding: '120px 30px',
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  margin: '0 auto'
});

export const BoxImg = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  position: 'relative',
  paddingRight: '180px'
});
export const ImgOne = styled('img')({
  objectFit: 'cover',
  width: '100%',
  maxWidth: 456
});
export const ImgTwo = styled('img')({
  marginTop: '-10%',
  marginLeft: '38%',
  objectFit: 'cover',
  width: '100%',
  maxWidth: 456

  // left: 170,
  // top: -35
});
export const BoxInfo = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  maxWidth: '696px'
});

export const FirstTitle = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.primary.main,
    fontWight: 600,
    fontSize: '20px',
    marginBottom: '8px'
  };
});

export const LastTitle = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.text.primary,
    fontWeight: 700,
    fontSize: '32px',
    marginBottom: '16px'
  };
});

export const Text = styled(Typography)<{ open: boolean }>(({ theme, open }) => {
  return {
    color: theme.palette.text.primary,
    marginBottom: 0,
    overflow: 'hidden',
    height: open ? '285px' : '118px',
    transition: 'all .3s linear'
  };
});
export const Span = styled('span')(() => {
  return {
    display: 'block'
  };
});
export const Button = styled(MUIButton)({
  borderRadius: 0,
  boxShadow: 'none',
  width: 200,
  fontSize: 16,
  textTransform: 'none',
  padding: '12px 0 ',
  marginTop: 30,
  fontWeight: 600
});
