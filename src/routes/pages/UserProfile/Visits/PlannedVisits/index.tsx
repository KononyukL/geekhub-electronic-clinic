import { Container } from './styled';
import Visit from '../Visit';

const visit = [
  {
    name: 'hjhjhvjh',
    positionDoctor: 'sgsggsgs',
    date: 'hjhjvhjhj',
    time: 'kbbhhb',
    reception: 'hbbhhbhb'
  },
  {
    name: 'hjhjhvjh',
    positionDoctor: 'sgsggsgs',
    date: 'hjhjvhjhj',
    time: 'kbbhhb',
    reception: 'hbbhhbhb'
  },
  {
    name: 'hjhjhvjh',
    positionDoctor: 'sgsggsgs',
    date: 'hjhjvhjhj',
    time: 'kbbhhb',
    reception: 'hbbhhbhb'
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
        />
      ))}
    </Container>
  );
};

export default PlannedVisits;
