import React, { FC, useCallback, useEffect, useState } from 'react';
import { BoxInfo, Container } from '../ActivePatient/styled';
import PatientInfo from '../PatientInfo';
import { PATIENT_PER_PAGE } from '../index';
import { Pagination } from 'components';
import { ReactComponent as Cross } from 'assets/icons/cross.svg';
import { ReactComponent as Tick } from 'assets/icons/tick.svg';
import { Box, IconButton } from '@mui/material';
import { IPaginationComponent } from 'types';
import { ActionAppointmentModal } from 'components/Modal';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { confirmVisits, deleteVisits, getUnconfirmedVisits, selectVisits } from 'store/visits';
import { useSearchParams } from 'react-router-dom';
import { parseDate } from 'config/helpers';
import NoRecords from 'components/view/profile/ NoRecords';

const QueriesPatient: FC<IPaginationComponent> = ({
  pageCount,
  page,
  onSetItemsCount,
  handleChangePage
}) => {
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
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
      setOpenConfirmModal(false);

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
  const handleDelete = () => {
    setOpenModal(!openModal);
  };

  const handleConfirm = () => {
    setOpenConfirmModal(!openConfirmModal);
  };

  return (
    <Container>
      {unconfirmedVisits &&
        (unconfirmedVisits?.results.length ? (
          unconfirmedVisits?.results?.map((visit, i) => (
            <BoxInfo key={i}>
              <PatientInfo
                name={visit.patient}
                phone={visit.phone_num}
                date={parseDate(visit.date, 'DD.MM.YYYY')}
                time={visit.time}
                reception={visit.price}
              />
              <Box sx={{ display: 'flex', gap: '10px' }}>
                <IconButton onClick={handleDelete} disabled={isLoading}>
                  <Cross />
                </IconButton>
                <IconButton onClick={handleConfirm} disabled={isLoading}>
                  <Tick />
                </IconButton>
              </Box>
              <ActionAppointmentModal
                title="Відхилити прийом пацієнта?"
                subTitle="Ви точно бажаєте відхилити прийом"
                open={openModal}
                setOpen={setOpenModal}
                onAction={deleteVisit(visit.id)}
                name={visit.patient}
                date={parseDate(visit.date, 'DD.MM.YYYY')}
                time={visit.time}
              />
              <ActionAppointmentModal
                title="Підтвердити прийом пацієнта?"
                subTitle="Ви точно бажаєте підтвердити прийом"
                open={openConfirmModal}
                setOpen={setOpenConfirmModal}
                onAction={onConfirmVisit(visit.id)}
                name={visit.patient}
                date={parseDate(visit.date, 'DD.MM.YYYY')}
                time={visit.time}
              />
            </BoxInfo>
          ))
        ) : (
          <NoRecords />
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
