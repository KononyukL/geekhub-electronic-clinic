import {
  Accordion as MUIAccordion,
  AccordionSummary as MUIAccordionSummary,
  Box,
  styled,
  Typography
} from '@mui/material';

export const BoxAvatar = styled(Box)(() => {
  return {
    display: 'flex',
    gap: '16px'
  };
});
export const DoctorInfo = styled(Box)(() => {
  return {
    width: '300px'
  };
});
export const Container = styled(Box)(() => {
  return {
    paddingTop: '24px'
  };
});
export const NameDoctor = styled(Typography)(() => {
  return {
    marginBottom: '5px',
    fontWeight: 600
  };
});
export const Specialization = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.primary.main,
    fontWeight: 600
  };
});

export const BoxData = styled(Box)(() => {
  return {
    display: 'flex',
    gap: '35px',
    alignItems: 'center'
  };
});

export const Date = styled(Typography)(({ theme }) => {
  return {
    flex: '0 0 170px',
    color: theme.palette.text.secondary
  };
});
export const Diagnosis = styled(Typography)(({ theme }) => {
  return {
    flex: '0 0 400px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: theme.palette.text.secondary
  };
});

export const Span = styled('span')(({ theme }) => {
  return {
    color: theme.palette.text.primary,
    marginLeft: '8px'
  };
});

export const StyledAccordion = styled(MUIAccordion)(() => {
  return {
    '&.MuiAccordion-root': {
      margin: 0,
      boxShadow: 'none'
    },
    '&.MuiAccordion-root:before': {
      backgroundColor: 'transparent'
    }
  };
});
export const StyledAccordionSummary = styled(MUIAccordionSummary)(({ theme }) => {
  return {
    borderTop: `1px solid ${theme.palette.background.default}`,
    padding: '12px 0'
  };
});
