import React, { useState } from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Container, Calendar, FreeHours, List, TimeButton, ListItem, Data } from './styled';

const data = [
  {
    date: '02-04-2023',
    freeTime: [
      { time: '09:00', free: true },
      { time: '09:30', free: false },
      { time: '10:00', free: true },
      { time: '10:30', free: true },
      { time: '11:00', free: true },
      { time: '11:30', free: true },
      { time: '12:00', free: true },
      { time: '12:30', free: false },
      { time: '13:00', free: true },
      { time: '13:30', free: true },
      { time: '14:00', free: true },
      { time: '14:30', free: true },
      { time: '15:00', free: true },
      { time: '15:30', free: true },
      { time: '16:00', free: false },
      { time: '16:30', free: true },
      { time: '17:00', free: true },
      { time: '17:30', free: true }
    ]
  },
  {
    date: '03-04-2023',
    freeTime: [
      { time: '09:00', free: true },
      { time: '09:30', free: false },
      { time: '10:00', free: true },
      { time: '10:30', free: false },
      { time: '11:00', free: true },
      { time: '11:30', free: true },
      { time: '12:00', free: true },
      { time: '12:30', free: false },
      { time: '13:00', free: true },
      { time: '13:30', free: true },
      { time: '14:00', free: true },
      { time: '14:30', free: true },
      { time: '15:00', free: true },
      { time: '15:30', free: true },
      { time: '16:00', free: false },
      { time: '16:30', free: true },
      { time: '17:00', free: true },
      { time: '17:30', free: true }
    ]
  },
  {
    date: '04-04-2023',
    freeTime: [
      { time: '09:00', free: false },
      { time: '09:30', free: true },
      { time: '10:00', free: true },
      { time: '10:30', free: true },
      { time: '11:00', free: false },
      { time: '11:30', free: true },
      { time: '12:00', free: true },
      { time: '12:30', free: false },
      { time: '13:00', free: false },
      { time: '13:30', free: false },
      { time: '14:00', free: true },
      { time: '14:30', free: true },
      { time: '15:00', free: true },
      { time: '15:30', free: false },
      { time: '16:00', free: true },
      { time: '16:30', free: false },
      { time: '17:00', free: true },
      { time: '17:30', free: true }
    ]
  },
  {
    date: '05-04-2023',
    freeTime: [
      { time: '09:00', free: false },
      { time: '09:30', free: false },
      { time: '10:00', free: false },
      { time: '10:30', free: false },
      { time: '11:00', free: false },
      { time: '11:30', free: false },
      { time: '12:00', free: false },
      { time: '12:30', free: false },
      { time: '13:00', free: false },
      { time: '13:30', free: false },
      { time: '14:00', free: false },
      { time: '14:30', free: false },
      { time: '15:00', free: false },
      { time: '15:30', free: true },
      { time: '16:00', free: false },
      { time: '16:30', free: true },
      { time: '17:00', free: false },
      { time: '17:30', free: true }
    ]
  }
];
const DoctorSchedule = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const handleChange = (value: any) => {
    setCurrentDate(value);
  };

  const handleBookingVisits = (freeTime: any) => {
    const visitsUser = [
      {
        data: currentDate.format('DD-MM-YYYY'),
        freeTime: { time: freeTime, free: false }
      }
    ];

    console.log(visitsUser);
  };

  return (
    <Container>
      <Calendar>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Data
            defaultValue={dayjs(currentDate, 'DD-MM-YYYY')}
            value={currentDate}
            slotProps={{
              actionBar: {
                actions: ['today']
              }
            }}
            onChange={handleChange}
          />
        </LocalizationProvider>
      </Calendar>
      <FreeHours>
        <List>
          {data.map((day) =>
            day.date === currentDate.format('DD-MM-YYYY')
              ? day.freeTime.map((today, index) =>
                  today.free ? (
                    <ListItem key={index}>
                      <TimeButton onClick={() => handleBookingVisits(today.time)}>
                        {today.time}
                      </TimeButton>
                    </ListItem>
                  ) : null
                )
              : null
          )}
        </List>
      </FreeHours>
    </Container>
  );
};

export default DoctorSchedule;
