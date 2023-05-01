import React, { FC, useState } from 'react';
import { Container, ButtonSwitch, DateStyle, Day } from './styled';
import { TCalendar } from '../types';

const Calendar: FC<TCalendar> = ({ updateCurrentDate }) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const handlerActiveData = (date: Date) => {
    setCurrentDate(date);
    updateCurrentDate(date.toISOString().substr(0, 10));
  };

  const handlePrevPage = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 1)));
    updateCurrentDate(currentDate.toISOString().substr(0, 10));
  };

  const handleNextPage = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 1)));
    updateCurrentDate(currentDate.toISOString().substr(0, 10));
  };

  return (
    <Container>
      <ButtonSwitch onClick={handlePrevPage}>❮</ButtonSwitch>
      {[-1, 0, 1].map((day) => {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() + day);
        return (
          <DateStyle
            key={date.toISOString()}
            onClick={() => handlerActiveData(date)}
            className={day === 0 ? 'active' : ''}>
            <Day>
              {date.toLocaleString('uk-UA', { day: 'numeric', month: 'short', weekday: 'short' })}
            </Day>
          </DateStyle>
        );
      })}
      <ButtonSwitch onClick={handleNextPage}>❯</ButtonSwitch>
    </Container>
  );
};

export default Calendar;
