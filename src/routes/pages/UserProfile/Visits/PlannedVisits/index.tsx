import Visit from '../Visit';
import React, { useEffect, useState } from 'react';
import { visitPlanned } from './mockData';
import { ModalProfile } from 'components/Modal';
import { useTranslation } from 'react-i18next';
import { Box, BoxInfo, Button } from './styled';
import { usePagination } from 'hooks/usePagination';
import { Pagination } from 'components';
import { VISITS_PER_PAGE } from '../index';
import { VisitsContainer } from '../styled';

const PlannedVisits = () => {
  const [openModal, setOpenModal] = useState(false);
  const { t } = useTranslation();

  const { page, pageCount, handleChangePage, resetPagination } = usePagination({
    itemsCount: visitPlanned.length
  });

  const currentVisit = visitPlanned.slice((page - 1) * VISITS_PER_PAGE, page * VISITS_PER_PAGE);

  useEffect(() => {
    resetPagination();
  }, []);

  const handleClick = () => {
    setOpenModal(!openModal);
  };
  return (
    <VisitsContainer>
      {currentVisit.map((item, i) => (
        <Box key={i}>
          <BoxInfo>
            <Visit
              name={item.name}
              positionDoctor={item.positionDoctor}
              date={item.date}
              time={item.time}
              reception={item.reception}
            />
            <Button variant="outlined" onClick={handleClick}>
              {t('buttons.cancel')}
            </Button>
            <ModalProfile open={openModal} setOpen={setOpenModal} />
          </BoxInfo>
        </Box>
      ))}
      {visitPlanned.length >= VISITS_PER_PAGE && (
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

export default PlannedVisits;
