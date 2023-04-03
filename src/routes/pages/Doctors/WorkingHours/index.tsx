import React, { FC, useState } from 'react';
import { Container, Wrapper, TimeButton } from './styled';
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
  '16:00',
  '16:00',
  '16:00',
  '16:00',
  '16:00',
  '16:00',
  '16:00'
];

const WorkingHours: FC = () => {
  const [bookingReception, setBookingReception] = useState<any>({});

  const handleBookingReception = (day: any) => {
    console.log('Modal: ', day);
  };

  return (
    <Container>
      <Calendar bookingReception={bookingReception} />
      <Wrapper>
        {data.length > 0 &&
          data.map((day, index) => (
            <TimeButton key={index} onClick={() => handleBookingReception(day)} children={day} />
          ))}
      </Wrapper>
    </Container>
  );
};

export default WorkingHours;
