import React, { FC, useEffect, useState } from 'react';
import moment from 'moment/moment';
import 'moment/locale/uk';
import { Container, ButtonSwitch, ButtonWrapper, Data, Day } from './styled';
import { IBookingReception } from '../typesAndInterfaces';

const Calendar: FC<IBookingReception> = ({ bookingReception }) => {
  const [currentDate, setCurrentDate] = useState(moment());
  const dates = [currentDate.clone()];

  useEffect(() => {
    const WorkingHours = {
      ...bookingReception,
      data: currentDate.format('ddd MMM Do yyyy')
    };
    console.log(WorkingHours);
  }, [bookingReception]);

  for (let i = 1; i <= 2; i++) {
    dates.push(currentDate.clone().add(i, 'day'));
  }

  const handlerActiveData = (data: any) => {
    setCurrentDate(data.clone());
  };

  return (
    <Container>
      <ButtonWrapper>
        <ButtonSwitch
          children={'❮'}
          onClick={() => setCurrentDate(currentDate.clone().subtract(1, 'day'))}
        />
      </ButtonWrapper>
      {dates.map((date, index) => (
        <Data onClick={() => handlerActiveData(date)} key={date.format()}>
          <Day className={index === 0 ? 'active' : ''}>{date.format('dd D MMM')}</Day>
        </Data>
      ))}
      <ButtonWrapper>
        <ButtonSwitch
          children={'❯'}
          onClick={() => setCurrentDate(currentDate.clone().add(1, 'day'))}
        />
      </ButtonWrapper>
    </Container>
  );
};

export default Calendar;
