import React, { FC, useCallback, useEffect, useState } from 'react';
import { BoxInfo, Container } from '../ActivePatient/styled';
import PatientInfo from '../PatientInfo';
import { PATIENT_PER_PAGE } from '../index';
import { Pagination } from 'components';
import { ReactComponent as Cross } from 'assets/icons/cross.svg';
import { ReactComponent as Tick } from 'assets/icons/tick.svg';
import { Box, IconButton } from '@mui/material';
import { IPaginationComponent } from 'types';
import ModalRejectAppointment from 'components/Modal/ModalRejectAppointment';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { confirmVisits, deleteVisits, getUnconfirmedVisits, selectVisits } from 'store/visits';
import { useSearchParams } from 'react-router-dom';
import { parseDate } from 'config/helpers';

const QueriesPatient: FC<IPaginationComponent> = ({
  pageCount,
  page,
  onSetItemsCount,
  handleChangePage
}) => {
  const [openModal, setOpenModal] = useState(false);
  const { unconfirmedVisits, isLoading } = useAppSelector(selectVisits);
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (unconfirmedVisits) {
      onSetItemsCount(unconfirmedVisits.count);
    }
  }, [unconfirmedVisits]);

  useEffect(() => {
    dispatch(
      getUnconfirmedVisits({
        page: searchParams.get('page') || 1
      })
    );
  }, [searchParams]);

  const deleteVisit = useCallback(
    (id: string | number) => async () => {
      const { payload } = await dispatch(deleteVisits(id));
      setOpenModal(false);

      if (payload) {
        dispatch(
          getUnconfirmedVisits({
            page: searchParams.get('page') || 1
          })
        );
      }
    },
    [searchParams]
  );

  const onConfirmVisit = useCallback(
    (id: string | number) => async () => {
      const { payload } = await dispatch(confirmVisits(id));
      setOpenModal(false);

      if (payload) {
        dispatch(
          getUnconfirmedVisits({
            page: searchParams.get('page') || 1
          })
        );
      }
    },
    [searchParams]
  );
  const handleClick = () => {
    setOpenModal(!openModal);
  };

  return (
    <Container>
      {unconfirmedVisits?.results?.map((visit, i) => (
        <BoxInfo key={i}>
          <PatientInfo
            name={visit.patient}
            phone={visit.phone_num}
            date={parseDate(visit.date, 'DD.MM.YYYY')}
            time={visit.time}
            reception={visit.price}
          />
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <IconButton onClick={handleClick} disabled={isLoading}>
              <Cross />
            </IconButton>
            <IconButton onClick={onConfirmVisit(visit.id)} disabled={isLoading}>
              <Tick />
            </IconButton>
          </Box>
          <ModalRejectAppointment
            open={openModal}
            setOpen={setOpenModal}
            deleteVisit={deleteVisit(visit.id)}
            name={visit.patient}
            date={parseDate(visit.date, 'DD.MM.YYYY')}
            time={visit.time}
          />
        </BoxInfo>
      ))}
      {unconfirmedVisits && unconfirmedVisits.count > PATIENT_PER_PAGE && (
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
    </Container>
  );
};

export default QueriesPatient;
