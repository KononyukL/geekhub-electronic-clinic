import Visit from '../Visit';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { ModalProfile } from 'components/Modal';
import { Box, BoxInfo, Button } from './styled';
import { Pagination } from 'components';
import { VISITS_PER_PAGE } from '../index';
import { VisitsContainer } from '../styled';
import { IPaginationComponent } from 'types';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { deleteVisits, getPlannedVisits, selectVisits } from 'store/visits';
import { IDeleteVisit } from 'api/visits/types';

const PlannedVisits: FC<IPaginationComponent> = ({
  pageCount,
  page,
  onSetItemsCount,
  handleChangePage
}) => {
  const [openModal, setOpenModal] = useState(false);

  const [searchParams] = useSearchParams();

  const dispatch = useAppDispatch();
  const { plannedVisits } = useAppSelector(selectVisits);

  useEffect(() => {
    if (plannedVisits) {
      onSetItemsCount(plannedVisits.count);
    }
  }, [plannedVisits]);

  useEffect(() => {
    dispatch(
      getPlannedVisits({
        page: searchParams.get('page') || 1
      })
    );
  }, [searchParams]);

  const handleClick = () => {
    setOpenModal(!openModal);
  };

  const deleteVisit = useCallback(
    (date: IDeleteVisit) => async () => {
      const { type } = await dispatch(deleteVisits(date));
      setOpenModal(false);

      if (type.includes('fulfilled')) {
        dispatch(
          getPlannedVisits({
            page: searchParams.get('page') || 1
          })
        );
      }
    },
    [searchParams]
  );

  return (
    <VisitsContainer>
      {plannedVisits?.results?.map((item, i) => (
        <Box key={i}>
          <BoxInfo>
            <Visit
              name={item.doctor}
              positionDoctor={item.specialization}
              date={item.date}
              time={item.time}
              reception={'-'}
            />
            <Button variant="outlined" onClick={handleClick}>
              Скасувати
            </Button>
            <ModalProfile
              open={openModal}
              setOpen={setOpenModal}
              deleteVisit={deleteVisit({ date: item.date, time: item.time })}
            />
          </BoxInfo>
        </Box>
      ))}
      {plannedVisits && plannedVisits.count > VISITS_PER_PAGE && (
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
