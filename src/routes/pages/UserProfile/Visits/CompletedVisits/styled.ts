import {
  Box,
  styled,
  Accordion as MUIAccordion,
  AccordionSummary as MUIAccordionSummary
} from '@mui/material';

export const Container = styled(Box)(() => {
  return {
    marginBottom: 20
  };
});
export const Accordion = styled(MUIAccordion)(() => {
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
export const AccordionSummary = styled(MUIAccordionSummary)(({ theme }) => {
  return {
    borderTop: `1px solid ${theme.palette.background.default}`,
    padding: '12px 0'
  };
});
