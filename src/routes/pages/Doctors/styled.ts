import { CSSObject, styled, Box } from '@mui/material';

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
    boxShadow: `-4px 15px 35px ${theme.palette.success.main}`,
    '&:first-of-type': {
     paddingTop: '24px'
    }
  } as CSSObject;
});

export const WrapperButton = styled(Box)(() => {
  return {
    margin: '0 auto'
  } as CSSObject;
});

export const ButtonDoctor = styled('button')<{ isActiveButton: boolean }>(({ theme, isActiveButton }) => {
  return {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    cursor: 'pointer',
    width: '288px',
    height: '80px',
    border: 0,
    marginBottom: '24px',
    borderRadius: '0px',
    fontSize: '20px',
    background: theme.palette.background.paper,
    borderLeft: `10px solid ${isActiveButton ? theme.palette.primary.main : theme.palette.secondary.main}`,
    transition: '.3s',
    backgroundColor: isActiveButton ? theme.palette.success.dark : theme.palette.background.paper,

    '&:hover': {
      backgroundColor: theme.palette.success.light,
      borderLeft: `10px solid ${theme.palette.secondary.light}`
    },
    '&:active': {
      backgroundColor: theme.palette.success.main,
      borderLeft: `10px solid ${theme.palette.secondary.dark}`
    },

  } as CSSObject;
});

export const Icon = styled('img')(() => {
  return {
    padding: '0 12px 0 24px'
  } as CSSObject;
});

