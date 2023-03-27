import React, {FC, useContext, useEffect, useState} from 'react';
import moment from 'moment/moment';
import { Container, ButtonSwitch, ButtonWrapper, Data, PrimeData, Title, Text } from './styled';
import { MyContext } from '../WorkingHours';

const Calendar: FC = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const dates = [currentDate.clone()];
  const context = useContext(MyContext);

  useEffect(() => {
    const WorkingHours = {
      ...context,
      data: currentDate.format('dddd MMMM Do yyyy')
    };
    console.log(WorkingHours);
  }, [context]);

  for (let i = 1; i <= 2; i++) {
    dates.push(currentDate.clone().add(i, 'day'));
  }

  return (
    <Container>
      <ButtonWrapper>
        <ButtonSwitch
          children={'❮'}
          onClick={() => setCurrentDate(currentDate.clone().subtract(1, 'day'))}
        />
      </ButtonWrapper>
      {dates.map((date, index) =>
        index === 0 ? (
          <PrimeData key={date.format()}>
            <Title>{date.format('dddd')}</Title>
            <Text>{date.format('MMMM Do')}</Text>
          </PrimeData>
        ) : (
          <Data key={date.format()}>
            <Title>{date.format('dddd')}</Title>
            <Text>{date.format('MMMM Do')}</Text>
          </Data>
        )
      )}
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
