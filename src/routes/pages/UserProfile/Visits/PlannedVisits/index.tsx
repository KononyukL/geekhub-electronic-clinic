import { Container } from './styled';
import Visit from '../Visit';
import React from 'react';

const visit = [
  {
    name: 'Андрущенко Ілона Макарівна',
    positionDoctor: 'Ендокринолог',
    date: 'Вт 21.03.2023 ',
    time: '09:00',
    reception: '600 грн'
  },
  {
    name: 'Андрущенко Ілона Макарівна',
    positionDoctor: 'Ендокринолог',
    date: 'Вт 21.03.2023 ',
    time: '09:00',
    reception: '600 грн'
  },
  {
    name: 'Андрущенко Ілона Макарівна',
    positionDoctor: 'Ендокринолог',
    date: 'Вт 21.03.2023 ',
    time: '09:00',
    reception: '600 грн'
  }
];
const PlannedVisits = () => {
  return (
    <Container>
      {visit.map((item, i) => (
        <Visit
          key={i}
          name={item.name}
          positionDoctor={item.positionDoctor}
          date={item.date}
          time={item.time}
          reception={item.reception}
          onAction={() => {}}
        />
      ))}
    </Container>
  );
};

export default PlannedVisits;
