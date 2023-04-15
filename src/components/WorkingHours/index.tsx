import React, { FC, useEffect, useState } from 'react';
import { Wrapper, TimeButton, SwitcherButton, Img } from './styled';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { workingHours } from 'store/workingHours/thunks';
import { selectWorkingHours } from 'store/workingHours';
import ModalConfirmVisit from '../ModalConfirmVisit';
import IGMShowMore from 'assets/icons/ShowMore.svg';
import { useAppSelector } from 'store/hooks';
import IGMHide from 'assets/icons/Hide.svg';
import { useDispatch } from 'react-redux';
import Calendar from './Calendar';
import { RootState } from 'store';

type TWorkingHours = {
  showAllHours?: boolean;
  doctorId?: string;
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (doctorId && currentDate) {
      dispatch(workingHours({ doctor_id: doctorId, date: currentDate }));
    }
  }, [doctorId, currentDate, dispatch]);

  useEffect(() => {
    if (showAllHours) {
      setVisibleHours(18);
    }
  }, [showAllHours]);

  useEffect(() => {
    if (allWorkingHours && allWorkingHours.length > 0) {
      const freeHoursDoctor: string[] = Object.entries(allWorkingHours[1])
        .filter(([time, value]) => value === true)
        .map(([time, value]) => time);
      setFreeHours(freeHoursDoctor);
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
    // console.log('Обрана дата та id лікаря: ', currentDate, doctorId);
  };

  const handleBookingData = (time: string) => {
    setBookVisit(time);
    // console.log(currentDate, time, doctorId); // Дата, Час, Ід лікаря
  };

  return (
    <>
      <Calendar max_date={max_date} updateCurrentDate={updateCurrentDate} />
      <Wrapper>
        {freeHours &&
          freeHours.slice(0, visibleHours).map((time) => (
            <TimeButton
              key={time}
              onClick={() => {
                handleBookingData(time);
                handleOpen();
              }}
              children={time}
            />
          ))}
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
      />
    </>
  );
};

export default WorkingHours;
