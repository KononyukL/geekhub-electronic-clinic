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
import { parseDate } from 'config/helpers';
import NoRecords from 'components/view/profile/ NoRecords';
import { selectDoctors } from 'store/doctors';
import { useUpdateEffect } from 'hooks';

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
  const {
    specializations: { results: specializationsList }
  } = useAppSelector(selectDoctors);

  useEffect(() => {
    if (plannedVisits) {
      onSetItemsCount(plannedVisits.count);
    }
  }, [plannedVisits]);

  useUpdateEffect(() => {
    const specialist = searchParams.get('specialist');
    const specializationId = specializationsList.find((item) => item.name === specialist)?.id;

    dispatch(
      getPlannedVisits({
        page: searchParams.get('page') || 1,
        specializationId
      })
    );
  }, [searchParams]);

  const handleClick = () => {
    setOpenModal(!openModal);
  };

  const deleteVisit = useCallback(
    (id: string | number) => async () => {
      const { payload } = await dispatch(deleteVisits(id));
      setOpenModal(false);

      if (payload) {
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
      {plannedVisits &&
        (plannedVisits.results.length ? (
          plannedVisits?.results?.map((item, i) => (
            <Box key={i}>
              <BoxInfo>
                <Visit
                  name={item.doctor}
                  positionDoctor={item.specialization}
                  date={parseDate(item.date, 'DD.MM.YYYY')}
                  time={item.time}
                  reception={item.price}
                />
                <Button variant="outlined" onClick={handleClick}>
                  Скасувати
                </Button>
                <ModalProfile
                  open={openModal}
                  setOpen={setOpenModal}
                  deleteVisit={deleteVisit(item.id)}
                />
              </BoxInfo>
            </Box>
          ))
        ) : (
          <NoRecords paddingSize={24} />
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
