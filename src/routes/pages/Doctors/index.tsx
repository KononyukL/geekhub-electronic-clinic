import React, { useState } from 'react';
import { FC } from 'react';
import { Wrapper, Aside, ButtonDoctor, WrapperButton, Icon, Container } from './styled';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import SelectedDoctorsList from './SelectedDoctorsList';
import DoctorsBreadcrumbs from './DoctorsBreadcrumbs';
import IMGAllDoctors from 'assets/icons/AllDoctors.svg';
import IMGDermatologist from 'assets/icons/Dermatologist.svg';
import IMGCardiologist from 'assets/icons/Cardiologist.svg';
import IMGTherapist from 'assets/icons/Therapist.svg';
import IMGPulmonologist from 'assets/icons/Pulmonologist.svg';
import IMGGastroenterologist from 'assets/icons/Gastroenterologist.svg';
import { IDoctor } from './typesAndInterfaces';

const specialties = [
  { specialty: 'Всі Лікарі', icon: IMGAllDoctors },
  { specialty: 'Дерматолог', icon: IMGDermatologist },
  { specialty: 'Кардіолог', icon: IMGCardiologist },
  { specialty: 'Терапевт', icon: IMGTherapist },
  { specialty: 'Пульмонолог', icon: IMGPulmonologist },
  { specialty: 'Гастроентеролог', icon: IMGGastroenterologist }
];

const Doctors: FC = () => {
  const { doctors } = useSelector((state: RootState) => state.doctors);
  const [selectedDoctors, setSelectedDoctors] = useState<IDoctor[]>([]);
  const [activeButton, setActiveButton] = useState('');
  const [flagPagination, setFlagPagination] = useState(false);

  const handleFilterDoctors = (specialty: any) => {
    const filteredDoctors = doctors.filter((doctor: any) => specialty === doctor.profession);
    setSelectedDoctors(filteredDoctors);
    setActiveButton(specialty);
  };

  return (
    <Container>
      <DoctorsBreadcrumbs />
      <Wrapper>
        <Aside>
          {specialties.length > 0 &&
            specialties.map((specialty, index) => (
              <WrapperButton key={index}>
                <ButtonDoctor
                  isActiveButton={activeButton === specialty.specialty}
                  onClick={() => {
                    handleFilterDoctors(specialty.specialty);
                    setFlagPagination(!flagPagination);
                  }}>
                  <Icon src={specialty.icon} alt={specialty.specialty} />
                  {specialty.specialty}
                </ButtonDoctor>
              </WrapperButton>
            ))}
        </Aside>
        <SelectedDoctorsList
          flagPagination={flagPagination}
          selectedDoctors={selectedDoctors.length > 0 ? selectedDoctors : doctors}
        />
      </Wrapper>
    </Container>
  );
};

export default Doctors;
