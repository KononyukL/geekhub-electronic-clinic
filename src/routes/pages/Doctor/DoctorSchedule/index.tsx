import React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Container, Calendar, FreeHours, TimeItem, TimeLink, TimeList, Data } from './styled';

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

const DoctorSchedule = () => {
  return (
    <Container>
      <Calendar>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Data
            defaultValue={dayjs()}
            slotProps={{
              actionBar: {
                actions: ['today']
              }
            }}
          />
        </LocalizationProvider>
      </Calendar>
      <FreeHours>
        <TimeList>
          {data.length > 0 &&
            data.map((day, index) => (
              <TimeItem key={index}>
                <TimeLink
                  to={'/'}
                  // onClick={() => handleBookingReception(day)}
                  children={day}
                />
              </TimeItem>
            ))}
        </TimeList>
      </FreeHours>
    </Container>
  );
};

export default DoctorSchedule;
