import React, { createContext, FC, useState } from 'react';
import { TimeButton, Container, Wrapper } from './styled';

import Calendar from '../Calendar';

const data = [
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
  '16:00'
];

export const MyContext = createContext({});

const WorkingHours: FC = () => {
  const [bookingReception, setBookingReception] = useState({});

  const handleBookingReception = (day: any) => {
    setBookingReception({
      time: day,
      status: 'free'
    });
  };

  return (
    <MyContext.Provider value={bookingReception}>
      <Container>
        <Calendar />
        <Wrapper>
          {data.length > 0 &&
            data.map((day, index) => (
              <TimeButton key={index} onClick={() => handleBookingReception(day)} children={day} />
            ))}
        </Wrapper>
      </Container>
    </MyContext.Provider>
  );
};

export default WorkingHours;
