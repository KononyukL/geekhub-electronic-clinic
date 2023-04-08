import { Box, styled, Button as MUIButton } from '@mui/material';

export const Container = styled(Box)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  };
});
export const BoxContacts = styled(Box)(({ theme }) => {
  return {
    backgroundColor: 'transparent',
    borderBottom: `1px solid ${theme.palette.text.secondary}`
  };
});
export const BoxMain = styled(Box)({
  padding: '30px 0',
  background: 'transparent'
});

export const ContainerContent = styled(Box)({
  maxWidth: 1420,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '0 auto'
});

export const ContactsBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  padding: '16px 0'
});

export const Button = styled(MUIButton)(() => {
  return {
    textTransform: 'initial',
    width: 150,
    borderRadius: 0,
    padding: '10px 0',
    fontSize: 16,
    fontWeight: 500
  };
});
