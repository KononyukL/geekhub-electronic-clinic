import React, { FC, useState } from 'react';
import moment from 'moment/moment';
import 'moment/locale/uk';
import { Container, ButtonSwitch, Date, Day } from './styled';

const Calendar: FC = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const dates = [currentDate.clone()];

  for (let i = 1; i <= 2; i++) {
    dates.push(currentDate.clone().add(i, 'day'));
  }

  const handlerActiveData = (data: any) => {
    setCurrentDate(data.clone());
  };

  const handlePrevPage = () => setCurrentDate(currentDate.clone().subtract(1, 'day'));
  const handleNextPage = () => setCurrentDate(currentDate.clone().add(1, 'day'));

  return (
    <Container>
      <ButtonSwitch onClick={handlePrevPage}>❮</ButtonSwitch>
      {dates.map((date, index) => (
        <Date onClick={() => handlerActiveData(date)} key={date.format()}>
          <Day className={index === 0 ? 'active' : ''}>{date.format('dd D MMM')}</Day>
        </Date>
      ))}
      <ButtonSwitch onClick={handleNextPage}>❯</ButtonSwitch>
    </Container>
  );
};

export default Calendar;
