import React, { FC, useEffect, useState } from 'react';
import { Wrapper, TimeButton, SwitcherButton, Img, Text } from './styled';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { workingHours } from 'store/workingHours/thunks';
import { selectWorkingHours } from 'store/workingHours';
import { ModalConfirmVisit } from 'components/Modal';
import IGMShowMore from 'assets/icons/ShowMore.svg';
import { useAppSelector } from 'store/hooks';
import IGMHide from 'assets/icons/Hide.svg';
import { useDispatch } from 'react-redux';
import Calendar from './Calendar';
import { RootState } from 'store';

type TWorkingHours = {
  showAllHours?: boolean;
  doctorId?: string | number;
  max_date?: number;
};

const WorkingHours: FC<TWorkingHours> = ({ showAllHours, doctorId, max_date }) => {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  const { workingHours: allWorkingHours } = useAppSelector(selectWorkingHours);
  const [buttonSwitcher, setButtonSwitcher] = useState<boolean>(true);
  const [currentDate, setCurrentDate] = useState<string>(
    new Date().toLocaleDateString('uk-UA').split('.').reverse().join('-')
  );
  const [visibleHours, setVisibleHours] = useState<number>(12);
  const [freeHours, setFreeHours] = useState<string[]>();
  const [bookVisit, setBookVisit] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (doctorId && currentDate) {
      dispatch(workingHours({ doctor_id: doctorId, date: currentDate }));
    }
  }, [currentDate, dispatch]);

  useEffect(() => {
    if (showAllHours) {
      setVisibleHours(18);
    }
  }, [showAllHours]);

  useEffect(() => {
    if (allWorkingHours && allWorkingHours.length > 0) {
      const currentDoctor: any = allWorkingHours.find(
        (doctor) => doctor.doctor_id === parseInt(doctorId as string)
      );
      if (currentDoctor?.time) {
        const findFreeHours = Object.entries(currentDoctor.time)
          .filter(([key, value]) => value === true)
          .map(([key, value]) => key);
        setFreeHours(findFreeHours);
      }
    }
  }, [allWorkingHours]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSwitcherFreeHours = () => {
    visibleHours === 12 ? setVisibleHours(18) : setVisibleHours(12);
    setButtonSwitcher((prevState) => !prevState);
  };

  const updateCurrentDate = (date: string) => {
    setCurrentDate(date);
  };

  const handleBookingData = (time: string) => {
    setBookVisit(time);
    console.log(currentDate, time, doctorId); // Дата, Час, Ід лікаря
  };

  return (
    <>
      <Calendar max_date={max_date} updateCurrentDate={updateCurrentDate} />
      <Wrapper>
        {freeHours && freeHours?.length > 0 ? (
          freeHours.slice(0, visibleHours).map((time) => (
            <TimeButton
              key={time}
              onClick={() => {
                handleBookingData(time);
                handleOpen();
              }}
              children={time}
            />
          ))
        ) : (
          <Text>На цю дату немає доступних слотів для запису</Text>
        )}
      </Wrapper>
      {!showAllHours && freeHours && freeHours.length > 12 && (
        <Wrapper>
          <SwitcherButton onClick={handleSwitcherFreeHours}>
            {buttonSwitcher ? 'Показати більше' : 'Приховати'}
            <Img
              src={buttonSwitcher ? IGMShowMore : IGMHide}
              alt={buttonSwitcher ? IGMShowMore : IGMHide}
            />
          </SwitcherButton>
        </Wrapper>
      )}
      <ModalConfirmVisit
        open={open}
        handleClose={handleClose}
        bookVisit={bookVisit}
        currentDate={currentDate}
        doctor_id={doctorId}
      />
    </>
  );
};

export default WorkingHours;
