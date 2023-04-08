import {
  Box as MUIBox,
  styled,
  Typography as MUITypography,
  Button as MUIButton
} from '@mui/material';

export const BoxTitle = styled(MUIBox)({
  maxWidth: 1420,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  margin: '0 auto 80px',
  padding: '124px 0px 254px'
});

export const Box = styled(MUIBox)({
  position: 'relative',
  width: '100%',
  height: 875
});

export const BgImage = styled('img')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center'
});

export const TypographyWhite = styled(MUITypography)(({ theme }) => {
  return {
    color: theme.palette.primary.contrastText
  };
});
export const TypographyMain = styled(MUITypography)(({ theme }) => {
  return {
    color: theme.palette.primary.main
  };
});
export const Button = styled(MUIButton)({
  borderRadius: 0,
  boxShadow: 'none',
  width: 216,
  fontSize: 16,
  textTransform: 'none',
  padding: '12px 0 ',
  marginTop: 30,
  fontWeight: 600
});

export const BoxCard = styled(MUIBox)({
  position: 'relative',
  maxWidth: 1420,
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0px auto',
  gap: 24,
  backgroundColor: 'transparent',
  marginTop: '-100px'
});

export const MainBox = styled(MUIBox)(({ theme }) => {
  return {
    backgroundColor: theme.palette.background.default,
    width: '100%'
  };
});

export const SliderBox = styled(MUIBox)(({ theme }) => {
  return {
    backgroundColor: theme.palette.secondary.main,
    width: '100%'
  };
});
export const StyleBox = styled(MUIBox)({
  position: 'relative',
  zIndex: 1
});
