import React, { FC, useState } from 'react';
import { Container, ButtonSwitch, DateStyle, Day } from './styled';

type TCalendar = {
  updateCurrentDate: any;
};

const MAX_DATES = 2;

const Calendar: FC<TCalendar> = ({ updateCurrentDate }) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const dates: Date[] = Array.from({ length: MAX_DATES + 1 })
    .fill(0)
    .map((_, index) => {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() + index);
      return date;
    });

  const handlerActiveData = (date: Date) => {
    setCurrentDate(date);
    updateCurrentDate(date.toISOString().substr(0, 10));
  };

  const handlePrevPage = () => {
    if (currentDate.getDate() !== new Date().getDate()) {
      setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 1)));
    }
  };

  const handleNextPage = () =>
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 1)));

  return (
    <Container>
      <ButtonSwitch onClick={handlePrevPage}>❮</ButtonSwitch>
      {dates.map(date => (
        <DateStyle onClick={() => handlerActiveData(date)} key={date.toISOString()}>
          <Day>
            {date.toLocaleDateString('uk-UA', { weekday: 'short', day: 'numeric', month: 'short' })}
          </Day>
        </DateStyle>
      ))}
      <ButtonSwitch onClick={handleNextPage}>❯</ButtonSwitch>
    </Container>
  );
};

export default Calendar;
