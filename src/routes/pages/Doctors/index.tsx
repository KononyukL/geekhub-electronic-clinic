import React, { useState } from 'react';
import { FC } from 'react';
import { Wrapper, Container, Aside, Doctor, AllDoctors } from './styled';
import { Link } from 'react-router-dom';
import Main from '../../../components/Doctors/Main';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { IDoctor } from '../../../components/Doctors/config';

const specialties = [
  'Терапевт',
  'Дерматолог',
  'Ендокринолог',
  'Кардіолог',
  'Гастроентеролог',
  'Педіатр'
];

const Doctors: FC = () => {
  const { doctors } = useSelector((state: RootState) => state.doctors);
  const [selectedDoctors, setSelectedDoctors] = useState<IDoctor[]>([]);

  const handleFilterDoctors = (specialty: any) => {
    const filteredDoctors = doctors.filter((doctor: any) => specialty === doctor.profession);
    setSelectedDoctors(filteredDoctors);
  };

  return (
    <Wrapper>
      <Link to="/">Головна</Link>/Пошук лікаря
      <Container>
        <Aside>
          <AllDoctors children={'Всі лікарі'} onClick={() => setSelectedDoctors([])} />
          {specialties.length > 0 &&
            specialties.map((specialty, index) => (
              <Doctor
                onClick={() => handleFilterDoctors(specialty)}
                key={index}
                children={specialty}
              />
            ))}
        </Aside>
        <Main selectedDoctors={selectedDoctors.length > 0 ? selectedDoctors : doctors} />
      </Container>
    </Wrapper>
  );
};

export default Doctors;
