import React, { FC, useEffect } from 'react';
import { Accordion, AccordionSummary } from './styled';
import Visit from '../Visit';
import { AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Conclusion from 'components/view/profile/Conclusion';
import { Pagination } from 'components';
import { VISITS_PER_PAGE } from '../index';
import { VisitsContainer } from '../styled';
import { IPaginationComponent } from 'types';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getFinishedVisits, selectVisits } from 'store/visits';
import { useSearchParams } from 'react-router-dom';
import { parseDate } from 'config/helpers';
import NoRecords from 'components/view/profile/ NoRecords';
import { selectDoctors } from 'store/doctors';

const CompletedVisits: FC<IPaginationComponent> = ({
  page,
  pageCount,
  handleChangePage,
  onSetItemsCount
}) => {
  const [searchParams] = useSearchParams();

  const dispatch = useAppDispatch();
  const { finishedVisits } = useAppSelector(selectVisits);
  const {
    specializations: { results: specializationsList }
  } = useAppSelector(selectDoctors);

  useEffect(() => {
    if (finishedVisits) {
      onSetItemsCount(finishedVisits.count);
    }
  }, [finishedVisits]);

  useEffect(() => {
    const specialist = searchParams.get('specialist');
    const specializationId = specializationsList.find((item) => item.name === specialist)?.id;

    dispatch(
      getFinishedVisits({
        page: searchParams.get('page') || 1,
        specializationId
      })
    );
  }, [searchParams, specializationsList]);

  return (
    <VisitsContainer>
      {finishedVisits &&
        (finishedVisits.results.length ? (
          finishedVisits?.results?.map((item, i) => (
            <Box key={i}>
              <Accordion sx={{ padding: '0 24px' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Visit
                    key={i}
                    name={item.doctor}
                    positionDoctor={item.specialization}
                    date={parseDate(item.date, 'DD.MM.YYYY')}
                    time={item.time}
                    reception={item.price}
                    isCompleted
                  />
                </AccordionSummary>
                <AccordionDetails sx={{ '&.MuiAccordionDetails-root': { padding: 0 } }}>
                  <Conclusion data={item} />
                </AccordionDetails>
              </Accordion>
            </Box>
          ))
        ) : (
          <NoRecords paddingSize={24} />
        ))}
      {finishedVisits && finishedVisits.count >= VISITS_PER_PAGE && (
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
