import { CSSObject, styled, Box, Button } from '@mui/material';

export const Wrapper = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '60px 0 170px 0'
  } as CSSObject;
});

export const Aside = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    maxWidth: '335px',
    width: '100%',
    minHeight: '100px',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
    boxShadow: '-4px 15px 35px 0 #CCCCCC'
  } as CSSObject;
});

export const WrapperButton = styled(Box)(() => {
  return {
    margin: '0 auto',
  } as CSSObject;
});

export const ButtonDoctor = styled(Button)(({ theme }) => {
  return {
    display: "flex",
    justifyContent: 'start',
    width: '288px',
    height: '80px',
    marginBottom: '24px',
    borderRadius: '0px',
    fontSize: '20px',
    color: theme.palette.text.primary,
    background: theme.palette.background.paper,
    textTransform: 'capitalize',
    borderLeft: '10px solid #053D4C',

    '&:hover': {
      backgroundColor: '#F4F4F4',
      borderLeft: `10px solid ${theme.palette.primary.main}`,
    }
  } as CSSObject;
});

export const Icon = styled('img')(() => {
  return {
    padding: '0 12px 0 24px',
  } as CSSObject
})

export const AllDoctors = styled(ButtonDoctor)(({ theme }) => {
  return {
    marginTop: '24px',
  };
});
