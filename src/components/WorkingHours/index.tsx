import React, { FC, useEffect, useState } from 'react';
import { Wrapper, TimeButton, SwitcherButton, Img } from './styled';
import { useTranslation } from 'react-i18next';
import IGMHide from 'assets/icons/Hide.svg';
import IGMShowMore from 'assets/icons/ShowMore.svg';
import ModalConfirmVisit from '../ModalConfirmVisit';
import Calendar from './Calendar';
import { useDispatch } from 'react-redux';
import { workingHours } from '../../store/workingHours/thunks';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { useAppSelector } from '../../store/hooks';
import { selectWorkingHours } from '../../store/workingHours';

type IWorkingHours = {
  showAllHours?: boolean;
  doctorId?: number;
};

const WorkingHours: FC<IWorkingHours> = ({ showAllHours, doctorId }) => {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  const { workingHours: allWorkingHours } = useAppSelector(selectWorkingHours);
  const [currentDate, setCurrentDate] = useState<string | null>(
    new Date().toLocaleDateString('uk-UA').split('.').reverse().join('-')
  );
  const [buttonSwitcher, setButtonSwitcher] = useState<boolean>(true);
  const [visibleHours, setVisibleHours] = useState<number>(12);
  const [freeHours, setFreeHours] = useState<string[]>();
  const [bookVisit, setBookVisit] = useState<string>('');
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

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
      setFreeHours(freeHoursDoctor)
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
      <Calendar updateCurrentDate={updateCurrentDate} />
      <Wrapper>
        {freeHours && freeHours.slice(0, visibleHours).map(time => (
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
            {buttonSwitcher ? t('doctors.showMore') : t('doctors.hide')}
            <Img
              src={buttonSwitcher ? IGMShowMore : IGMHide}
              alt={buttonSwitcher ? IGMShowMore : IGMHide}
            />
          </SwitcherButton>
        </Wrapper>
      )}
      <ModalConfirmVisit open={open} handleClose={handleClose} bookVisit={bookVisit} />
    </>
  );
};

export default WorkingHours;
