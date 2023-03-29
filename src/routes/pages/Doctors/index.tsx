import React, { useState } from 'react';
import { FC } from 'react';
import { Wrapper, Container, Navigation, FindDoctor, Aside, Doctor, AllDoctors } from './styled';
import { Link } from 'react-router-dom';
import SelectedDoctorList from './SelectedDoctorList';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { IDoctor } from './config';

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
    <Container>
      <Navigation>
        <Link to="/">Головна/</Link>
        <FindDoctor>Пошук лікаря</FindDoctor>
      </Navigation>
      <Wrapper>
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
        <SelectedDoctorList
          selectedDoctors={selectedDoctors.length > 0 ? selectedDoctors : doctors}
        />
      </Wrapper>
    </Container>
  );
};

export default Doctors;
