import React, { useEffect } from 'react';
import { Accordion, AccordionSummary } from './styled';
import Visit from '../Visit';
import { visitCompleted } from './mockData';
import { AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Conclusion from 'components/view/profile/Conclusion';
import { usePagination } from 'hooks/usePagination';
import { Pagination } from 'components';
import { VISITS_PER_PAGE } from '../index';
import { VisitsContainer } from '../styled';

const CompletedVisits = () => {
  const { page, pageCount, handleChangePage, resetPagination } = usePagination({
    itemsCount: visitCompleted.length
  });

  const currentVisit = visitCompleted.slice((page - 1) * VISITS_PER_PAGE, page * VISITS_PER_PAGE);

  useEffect(() => {
    resetPagination();
  }, []);

  return (
    <VisitsContainer>
      {currentVisit.map((item, i) => (
        <Box key={i}>
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
      {visitCompleted.length >= VISITS_PER_PAGE && (
        <Pagination
          sx={{ padding: '28px' }}
          count={pageCount}
          page={page}
          color={'secondary'}
          onChange={handleChangePage}
          variant="outlined"
          shape="rounded"
        />
      )}
    </VisitsContainer>
  );
};

export default CompletedVisits;
