import React, { useState } from 'react';
import { FC } from 'react';
import { Wrapper, Aside, Doctor, AllDoctors } from './styled';
import { Link } from 'react-router-dom';
import SelectedDoctorList from './SelectedDoctorList';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { IDoctor } from './typesAndInterfaces';
import { Box } from '@mui/material';

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
    <Box>
      <Box sx={{ fontSize: '16px' }}>
        <Link to="/">Головна/</Link>
        <Link to="/doctors">Пошук лікаря</Link>
      </Box>
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
    </Box>
  );
};

export default Doctors;
