import React from 'react';
import { Container, Accordion, AccordionSummary } from './styled';
import Visit from '../Visit';
import { visitCompleted } from './mockData';
import { AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Conclusion from 'components/view/profile/Conclusion';

const CompletedVisits = () => {
  return (
    <Container>
      {visitCompleted.map((item, i) => (
        <Box>
          <Accordion sx={{ padding: '0 24px' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Visit
                key={i}
                name={item.name}
                positionDoctor={item.positionDoctor}
                date={item.date}
                time={item.time}
                reception={item.reception}
                isCompleted
              />
            </AccordionSummary>
            <AccordionDetails sx={{ '&.MuiAccordionDetails-root': { padding: 0 } }}>
              <Conclusion />
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </Container>
  );
};

export default CompletedVisits;
