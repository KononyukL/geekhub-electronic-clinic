import React, { FC, useEffect, useState } from 'react';
import { Wrapper, TimeButton, SwitcherButton, Img } from './styled';
import { useTranslation } from 'react-i18next';
import IGMHide from 'assets/icons/Hide.svg';
import IGMShowMore from 'assets/icons/ShowMore.svg';
import { ModalConfirmVisit } from 'components/Modal';
import Calendar from './Calendar';

const DATA = [
  '09:00',
  '09:30',
  '10:00',
  '11:00',
  '—',
  '12:00',
  '13:00',
  '13:30',
  '—',
  '15:00',
  '15:30',
  '16:00',
  '16:00',
  '16:00',
  '16:00',
  '16:00',
  '16:00',
  '16:00'
];

type IWorkingHours = {
  hideButton?: boolean;
};

const WorkingHours: FC<IWorkingHours> = ({ hideButton }) => {
  const { t } = useTranslation();
  const [visibleHours, setVisibleHours] = useState<number>(12);
  const [buttonSwitcher, setButtonSwitcher] = useState<boolean>(true);
  const [bookVisit, setBookVisit] = useState<string>('');

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (hideButton) {
      setVisibleHours(18);
    }
  }, [hideButton]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSwitcherFreeHours = () => {
    setButtonSwitcher((prevState) => !prevState);
    visibleHours === 12 ? setVisibleHours(18) : setVisibleHours(12);
  };

  const handleBookingData = (day: any) => {
    setBookVisit(day);
  };

  return (
    <>
      <Calendar />
      <Wrapper>
        {DATA.slice(0, visibleHours).map((day, index) => (
          <TimeButton
            key={index}
            onClick={() => {
              handleBookingData(day);
              handleOpen();
            }}
            children={day}
          />
        ))}
      </Wrapper>
      {!hideButton && DATA.length > 12 && (
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
