import React, { useState } from 'react';
import { FC } from 'react';
import { Wrapper, Aside, ButtonDoctor, AllDoctors, WrapperButton, Icon } from './styled';
import SelectedDoctorList from './SelectedDoctorList';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { Box, Breadcrumbs, Link } from '@mui/material';
import IMGAllDoctors from '../../../assets/icons/AllDoctors.svg';
import IMGDermatologist from '../../../assets/icons/Dermatologist.svg';
import IMGCardiologist from '../../../assets/icons/Cardiologist.svg';
import IMGTherapist from '../../../assets/icons/Therapist.svg';
import IMGPulmonologist from '../../../assets/icons/Pulmonologist.svg';
import IMGGastroenterologist from '../../../assets/icons/Gastroenterologist.svg';
import { IDoctor } from './typesAndInterfaces';

const specialties = [
  { specialty: 'Дерматолог', icon: IMGDermatologist },
  { specialty: 'Кардіолог', icon: IMGCardiologist },
  { specialty: 'Терапевт', icon: IMGTherapist },
  { specialty: 'Пульмонолог', icon: IMGPulmonologist },
  { specialty: 'Гастроентеролог', icon: IMGGastroenterologist }
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
      <Breadcrumbs aria-label="breadcrumb" separator="▪">
        <Link underline="hover" color="inherit" href="/">
          Головна
        </Link>
        <Link underline="hover" color="inherit" href="/doctors">
          Спеціальності та лікарі
        </Link>
      </Breadcrumbs>
      <Wrapper>
        <Aside>
          <WrapperButton>
            <AllDoctors onClick={() => setSelectedDoctors([])}>
              <Icon src={IMGAllDoctors} alt="AllDoctors" />
              {'Всі лікарі'}
            </AllDoctors>
          </WrapperButton>
          {specialties.length > 0 &&
            specialties.map((specialty, index) => (
              <WrapperButton key={index}>
                <ButtonDoctor onClick={() => handleFilterDoctors(specialty.specialty)}>
                  <Icon src={specialty.icon} alt={specialty.specialty} />
                  {specialty.specialty}
                </ButtonDoctor>
              </WrapperButton>
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
