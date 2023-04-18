import { styled, Box } from '@mui/material';

export const Container = styled(Box)(() => {
  return {
    maxWidth: 1420,
    margin: '0 auto'
  };
});

export const Wrapper = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '60px 0 170px 0'
  };
});

export const Aside = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    maxWidth: 335,
    width: '100%',
    minHeight: 100,
    height: '100%',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
    boxShadow: `-4px 15px 35px ${theme.palette.success.main}`,
    '&:first-of-type': {
      paddingTop: 24
    }
  };
});

export const WrapperButton = styled(Box)(() => {
  return {
    margin: '0 auto'
  };
});

export const ButtonDoctor = styled('button')<{ isActiveButton: boolean }>(
  ({ theme, isActiveButton }) => {
    return {
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center',
      cursor: 'pointer',
      width: 288,
      height: 80,
      border: 0,
      marginBottom: 24,
      borderRadius: 0,
      fontSize: 20,
      background: theme.palette.background.paper,
      borderLeft: `10px solid ${
        isActiveButton ? theme.palette.primary.main : theme.palette.secondary.main
      }`,
      transition: '.3s',
      backgroundColor: isActiveButton ? theme.palette.success.dark : theme.palette.background.paper,

      '&:hover': {
        backgroundColor: theme.palette.success.light,
        borderLeft: `10px solid ${theme.palette.secondary.light}`
      },
      '&:active': {
        backgroundColor: theme.palette.success.main,
        borderLeft: `10px solid ${theme.palette.secondary.dark}`
      }
    };
  }
);

export const Icon = styled('img')(() => {
  return {
    padding: '0 12px 0 24px'
  };
});
